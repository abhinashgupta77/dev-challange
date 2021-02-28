import React from "react";
import Categories from "./Categories/Categories";
import Filter from "./Filter/Filter";
import FilterVariant from "./Filter/FilterVariant";
import "./LeftBar.scss";
const LeftBar = () => {
  return (
    <div className="main__leftbar">
      <FilterVariant />
      <Categories />
      <Filter />
    </div>
  );
};

export default LeftBar;
