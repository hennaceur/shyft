import React from "react";
import GarageSaleMap from "./../../GarageSaleMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";
import "./Map.css";

function GarageSale() {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <Header />
      </div>
      <div className="container2">
        <GarageSaleMap />
      </div>
      <div className="container2">
        <p style={{ color: "grey", fontSize: "12px", fontWeight: "bold" }}>
          Copyright &#169; 2021 NearMe Inc. - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default GarageSale;
