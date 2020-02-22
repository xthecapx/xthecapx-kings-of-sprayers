import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layouts/Main";
import { ProductOverview } from "../components/Products/ProductOverview"
import { RelatedProducts } from "../components/Products/RelatedProducts"

export default ({ data }) => {
  const { sprayers } = data;

  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <ProductOverview sprayers={sprayers} />
        {/* details */}
        <RelatedProducts sprayers={sprayers} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($handle: String!) {
    sprayers(handle: { eq: $handle }) {
      id
      title
      handle
      description
      type
      variants {
        sku
        name
        weight
        weight_unit
        weight_in_unit
        weight_with_unit
      }
      featured_image
      related {
        description
        featured_image
        handle
        id
        title
      }
      tags {
        Frame
        Pump_Type
        Tank_Size
      }
    }
  }
`;
