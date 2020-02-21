import React from "react";
import Link from 'gatsby'
import ChevronRightIcon from 'font'

const ProductCard = props => {
  const { sprayer } = props;

  return (
    <div className="column related-product-card">
      <img
        src={sprayer.featured_image}
        className=""
        alt="photograph of related sprayer"
      />
      <p>SKU: {"12312312"}</p>
      <div className="kos__sprayerCard__content">{sprayer.title}</div>
      <div className="kos__sprayerCard__footer">
        <Link
          className="button is-rounded kos__btn--green kos__btn--big"
          to={`/products/${sprayer.handle}`}
        >
          <span>Details</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
};

export const RelatedProducts = props => {
  const { sprayers } = props;
  console.log(props);

  const firstRelated = sprayers.related.slice(0, 3);

  return (
    <div className="container columns ">
      {firstRelated.map((sprayer, i) => {
        return <ProductCard sprayer={sprayer} />;
      })}
    </div>
  );
};
