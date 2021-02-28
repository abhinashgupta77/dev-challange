import React from "react";
import "./Product.scss";
import heart from "../../../../assets/images/heart.svg";
import star from "../../../../assets/images/star.svg";
import starHalf from "../../../../assets/images/star-half.svg";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img
          className="product__image__item"
          src={data.image}
          alt="product-img"
        />
      </div>
      <div className="product__description">{data.description}</div>
      <div className="product__price">{data.price}</div>
      <div className="product__additionaldesc">{data.additionalDesc}</div>
      <div className="product__footer">
        <div className="product__footer__rating">
          <span className="product__footer__rating__star">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={starHalf} alt="img" />
          </span>
          <span className="product__footer__rating__value">{data.rating}</span>
        </div>
        <button className="product__footer__favbutton">
          <img
            className="product__footer__favbutton_heart"
            src={heart}
            alt="heart"
          />
          Watch
        </button>
      </div>
    </div>
  );
};

export default Product;
