import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <span className="productCardSpan">
          {" "}
        </span>
        <span className='productCardSpan'>{product.numOfReviews} Просмотр</span>
      </div>
      <span>{`$${product.price}`}</span>
      <Rating className='rating'{...options} />{" "}
      
    </Link>
  );
};

export default ProductCard;
