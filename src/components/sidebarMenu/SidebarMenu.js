import React, { useEffect, useRef } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import "./SidebarMenu.css";

function OutsideAlerter(ref, handleCloseSidebarMenu) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseSidebarMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCloseSidebarMenu);
    };
  }, [ref]);
}

function SidebarMenu() {
  const [open, setOpen] = React.useState(null);
  const handleOpenSidebarMenu = () => {
    setOpen(true);
  };
  const handleCloseSidebarMenu = () => {
    setOpen(false);
  };

  const wrapperRef = useRef(null);
  OutsideAlerter(wrapperRef, handleCloseSidebarMenu);

  const checkMenuLink = (listItem, index) => {
    if (typeof listItem !== "string") {
      return (
        <li key={index} className="sidebarMenu__menu">
          <Link
            onClick={handleCloseSidebarMenu}
            to={listItem[1] === "" ? "#" : listItem[1]}
          >
            {listItem[0]}
          </Link>
        </li>
      );
    }
    return <li key={index} className={listItem} />;
  };

  return (
    <div className="sidebarMenu" ref={wrapperRef}>
      <div onClick={handleOpenSidebarMenu} className="sidebarMenu__openIcon">
        <MenuIcon edge="start" />
      </div>
      <Drawer
        className="sidebarMenu__drawer"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <ul className="sidebarMenu__menuList">
          <li className="sidebarMenu__menu">
            {
              <Link onClick={handleCloseSidebarMenu} to="#">
                <MenuIcon />
              </Link>
            }
          </li>
          <li className="sidebarMenu__devider"></li>
          <li className="sidebarMenu__menu sidebarMenu__signIn">
            <Link onClick={handleCloseSidebarMenu} to="/login">
              <div className="sidebarMenu__userIcon">
                <AccountCircleIcon />
              </div>
              Hello, Sign In
            </Link>
          </li>
          {[
            "sidebarMenu__devider",
            ["Home", "/"],
            ["Your Prime", ""],
            ["Returns & orders", ""],
            ["Basket", "/checkout"],
          ].map((item, index) => {
            return checkMenuLink(item, index);
          })}
        </ul>
      </Drawer>
    </div>
  );
}
export default SidebarMenu;
