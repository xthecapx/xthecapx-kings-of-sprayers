const _ = require('lodash');
const path = require('path');
const axios = require('axios');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allSprayers {
        edges {
          node {
            id
            title
            handle
            tags {
              Frame
              Pump_Type
              Tank_Size
            }
            related {
              description
              featured_image
              handle
              id
              title
            }
          }
        }
      }
    }
  `);

  pages.data.allSprayers.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        handle: edge.node.handle,
        id: edge.node.id,
        related: edge.node.related,
        tags: edge.node.tags,
        title: edge.node.title
      }
    });
  });

  const staticPagesQuery = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  const staticPages = staticPagesQuery.data.allMarkdownRemark.edges;

  staticPages.forEach(edge => {
    const id = edge.node.id;
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      context: {
        id
      }
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
  const { data: shopifyProducts } = await axios(
    `https://www.sprayerdepot.com/collections/kings-sprayers?view=json`
  );

  const categories = shopifyProducts.reduce((acc, current) => {
    const { type } = current;

    if (!acc[type]) {
      acc[type] = type;
    }

    return acc;
  }, {});

  const tags = shopifyProducts.reduce((acc, current) => {
    const { tags } = current;

    tags.forEach(tag => {
      const tagString = tag.split(':');

      if (tagString.length === 2 && tagString[0] !== 'SKU') {
        if (!acc[tagString[0]]) {
          acc[tagString[0]] = tagString[1].trim();
        } else {
          if (acc[tagString[0]].indexOf(tagString[1]) === -1) {
            acc[tagString[0]] = tagString[1].trim();
          }
        }
      }
    });

    return acc;
  }, {});

  const mappedData = shopifyProducts.map(result => {
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

  shopifyProducts.forEach(product => {
    const related = shopifyProducts.filter(_product => {
      return _product.type === product.type && product.id !== _product.id;
    });

    const tags = product.tags.reduce((acc, tag) => {
      const tagString = tag.split(':');

      if (tagString.length === 2 && tagString[0] !== 'SKU') {
        if (!acc[tagString[0]]) {
          acc[tagString[0]] = tagString[1].trim();
        } else {
          if (acc[tagString[0]].indexOf(tagString[1]) === -1) {
            acc[tagString[0]] = tagString[1].trim();
          }
        }
      }

      return acc;
    }, {});

    createNode({
      handle: product.handle,
      id: product.id.toString(),
      related,
      tags,
      title: product.title,
      internal: {
        type: `Sprayers`,
        mediaType: `text/html`,
        description: product.title,
        content: JSON.stringify(product),
        contentDigest: createContentDigest(product)
      }
    });
  });

  createNode({
    list: mappedData,
    categories: Object.keys(categories),
    tagsList: Object.keys(tags),
    tags,
    id: `sprayers-list`,
    parent: null,
    children: [],
    internal: {
      type: `SprayersList`,
      contentDigest: createContentDigest(shopifyProducts)
    }
  });
};
