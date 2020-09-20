import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import "./Header.css";
import { auth } from "../../utils/firebase";
import SidebarMenu from "../sidebarMenu/SidebarMenu";

function Header() {
  const [{ basket, user }, dispatcher] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__sidebarMenuIcon">
          <SidebarMenu />
        </div>
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logoImage"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
        </div>
        <div className="header__nav">
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>
          <Link to={user ? "/" : "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option header__optionDisabled">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">{"& Orders"}</span>
          </div>
          <div className="header__option header__optionDisabled">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
