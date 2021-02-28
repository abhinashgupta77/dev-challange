import React from 'react'
import './GridView.scss'
import grid from "../../../../assets/images/grid.svg";
import list from "../../../../assets/images/list.svg";

const GridView = () => {
    return (
      <div className="view">
        <div className="view__item view--list">
          <img src={list} alt="img" />
        </div>
        <div className="view__item view--grid">
          <img src={grid} alt="img" />
        </div>
      </div>
    );
}

export default GridView
