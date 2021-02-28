import React from 'react'
import './RelatedProduct.scss'

const RelatedProduct = () => {

    const relatedProduct = [
      "worldwide shipping",
      "under $50",
      "kitten",
      "plastic plugs",
      "pucker shoes",
      "vintage typewriter",
    ];

    return (
      <div className="relatedproduct">
        <span className="relatedproduct__text">Related</span>
        {relatedProduct.map((item, index) => (
          <span key={index} className="relatedproduct__item">{item}</span>
        ))}
      </div>
    );
}

export default RelatedProduct
