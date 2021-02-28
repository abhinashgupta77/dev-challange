import React from 'react'
import filterVariant from "../../../../assets/images/filterVariant.svg";
const FilterVariant = () => {
    return (
      <div className="filter__variant">
        <img src={filterVariant} alt="img" />
        <span className="filter__variant_type">Departments</span>
      </div>
    );
}

export default FilterVariant
