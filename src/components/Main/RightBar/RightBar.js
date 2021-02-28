import React, { useState, useEffect } from "react";
import GridView from "./GridView/GridView";
import Product from "./Product/Product";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import "./RightBar.scss";
import Segment from "./Segment/Segment";
import Sort from "./Sort/Sort";
const RightBar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("json/products.json", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
          setProducts(data)
      })
  }, [])
  return (
    <div className="main__rightbar">
    <div className="top__section">
      <Sort />
      <div className="top__section__right">
        <Segment />
        <GridView />
      </div>
    </div>
    <RelatedProduct />
      <div className="main__rightbar__product">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default RightBar;
