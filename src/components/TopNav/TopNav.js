import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import "./TopNav.scss";
const TopNav = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("json/topNav.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNavData(data));
  }, []);

  return (
    <div className="nav">
      {navData.map((value, index) => (
        <NavItem key={index} data={value} />
      ))}
    </div>
  );
};

export default TopNav;
