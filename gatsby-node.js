const _ = require('lodash');
const path = require('path');
const axios = require('axios');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // get data from GitHub API at build time
  const result = await axios(
    `https://www.sprayerdepot.com/collections/kings-sprayers?view=json`
  );
  const resultData = eval(result.data);

  const categories = resultData.reduce((acc, current) => {
    const { type } = current;

    if (!acc[type]) {
      acc[type] = type;
    }

    return acc;
  }, {});

  const tags = resultData.reduce((acc, current) => {
    const { tags } = current;

    tags.forEach(tag => {
      const tagString = tag.split(':');

      if (tagString.length === 2 && tagString[0] !== 'SKU') {
        if (!acc[tagString[0]]) {
          acc[tagString[0]] = [tagString[1].trim()];
        } else {
          if (acc[tagString[0]].indexOf(tagString[1]) === -1) {
            acc[tagString[0]].push(tagString[1].trim());
          }
        }
      }
    });

    return acc;
  }, {});

  const mappedData = resultData.map(result => {
    return {
      ...result,
      tags: result.tags.reduce((acc, currentTag) => {
        const prop = currentTag.split(':');

        if (prop.length === 2) {
          acc[prop[0]] = prop[1];
        }

        return acc;
      }, {})
    };
  });

  // create node for build time data example in the docs
  createNode({
    list: mappedData,
    categories: Object.keys(categories),
    tagsList: Object.keys(tags),
    tags,
    id: `sprayers-data`,
    parent: null,
    children: [],
    internal: {
      type: `Sprayers`,
      contentDigest: createContentDigest(resultData)
    }
  });
};
