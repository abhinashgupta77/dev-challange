import React from "react";

const NavItem = ({ data }) => {
  return (
    <div className="nav__item">
      <img className="nav__item__icon" src={data.icon} alt={data.name} />
      <span
        className={`nav__item__name ${
          data.name === "Clothing & Shoes" ? "active" : ""
        }`}
      >
        {data.name}
      </span>
    </div>
  );
};

export default NavItem;
