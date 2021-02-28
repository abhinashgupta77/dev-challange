import React from 'react'
import './Header.scss'
import SearchIcon from "../../assets/images/Search.svg";
import VectorIcon from "../../assets/images/Vector.svg";
import EdwardPowlowski from "../../assets/images/EdwardPowlowski.svg";

const Header = () => {
    return (
      <header>
        <div className="header">
          <div className="header__logo">
            <span className="header__logo__icon">S</span> eCommerce
          </div>
          <div className="header__search">
            <img src={SearchIcon} alt="icon" />
            <input
              className="header__search__inp"
              type="text"
              placeholder="Search"
            />
            <img src={VectorIcon} alt="icon" />
          </div>
          <div className="header__consumer">Consumer Electronics</div>
          <div className="header__signin__mycart">
            <button className="header__sigin__button">Signin</button>
            <button className="header__mycart__button">My cart</button>
          </div>
          <div className="header__user">
            <span className="header__user__notification">5</span>
            <img src={EdwardPowlowski} alt="user" />
          </div>
        </div>
      </header>
    );
}

export default Header
