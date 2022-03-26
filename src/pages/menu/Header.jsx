import React from "react";
import "./Header.css";
import Logo from "./../../images/Logo.png";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/info"}>
        <IconButton style={{ color: "#E1373D" }}>
          <InfoIcon style={{ fontSize: 40 }} className="header_icon" />
        </IconButton>
      </Link>

      <img className="header_logo" src={Logo} alt="" />

      <Link style={{ textDecoration: "none", color: "black" }} to={"/profile"}>
        <IconButton style={{ color: "#E1373D" }}>
          <AccountCircleIcon style={{ fontSize: 40 }} className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
