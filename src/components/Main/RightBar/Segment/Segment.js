import React from "react";
import "./Segment.scss";

const Segment = () => {
  return (
    <div className="segment">
      <button className="segment__button segment--showall">Show all</button>
      <button className="segment__button segment--auction">Auction</button>
      <button className="segment__button segment--buynow">Buy now</button>
    </div>
  );
};

export default Segment;
