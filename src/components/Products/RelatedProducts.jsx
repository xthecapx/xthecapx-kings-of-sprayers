import React from "react";
import Link from "gatsby";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const ProductCard = props => {
  const { sprayer } = props;

  return (
    <div className="column relatedProductCard">
      <img
        src={sprayer.featured_image}
        className=""
        alt="photograph of related sprayer"
      />
      <p>SKU: {"12312312"}</p>
      <h1 className="kos__relatedSprayerCard__title">{sprayer.title}</h1>
      <div className="kos_relatedSprayerCard__divider"></div>
      <div className="kos__relatedSprayerCard__footer">
        link
        {/* <Link
          className="button is-rounded kos__btn--green kos__btn--big"
          to={`/products/${sprayer.handle}`}
        >
          <span>Details</span>
          <ChevronRightIcon />
        </Link> */}
      </div>
    </div>
  );
};

export const RelatedProducts = props => {
  const { sprayers } = props;
  console.log(props);

  console.log("Related:");
  console.log(sprayers.related);
  const firstRelated = sprayers.related.slice(0, 4);

  return (
    <div className="container kos__relatedProducts">
      <div className="kos__relatedProducts__header">
        <p className="kos__relatedProducts__subtitle">RELATED</p>
        <p className="kos__relatedProduct__title">PRODUCTS</p>
      </div>

      <div className="columns is-3 is-vcentered">
        {firstRelated.map((sprayer, i) => {
          return <ProductCard sprayer={sprayer} />;
        })}
      </div>
    </div>
  );
};
