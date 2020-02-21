import React from "react";
import { Link } from "gatsby";

export const ProductOverview = props => {
  const { sprayers } = props;
  console.log(props);

  return (
    <div className="container product-overview-container">
      <div className="columns">

        <section className="column product-image">
          <img
            className=""
            src={sprayers.featured_image}
            alt="photograph of selected sprayer"
          />
        </section>

        <section className="column product-overview-inner">
          <div className="product-path">
            Sprayers > Kings Sprayers > 2-Wheel
            <Link to="/" className="" title="">
              {/* {  ||  ?   < /> : < /> } */}
            </Link>
          </div>

          <div className="product-overview-details">
            <h1 className="product-overview-title">{sprayers.title}</h1>
            <div className="product-overview-codes">
              <div className="product-overview-section">
                <div className="overview-code-section">
                  <p className="overview-code-title">SKU</p>
                  <p className="overview-code-number">00000</p>
                  {/* <p className="overview-code-number">sprayers.sku_number</p> */}
                </div>
              </div>
              <div className="overview-code-divider"></div>
              <div>
                <div className="overview-code-section">
                  <p className="overview-code-title">MODEL</p>
                  <p className="overview-code-number">00000</p>
                  {/* <p className="overview-code-number">{sprayers.model_number}</p> */}
                </div>
              </div>
            </div>
            <div className="product-overview-description">
              <h6>Overview:</h6>
              <p>{sprayers.description}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
