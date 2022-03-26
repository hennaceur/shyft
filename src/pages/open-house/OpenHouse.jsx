import React from "react";
import OpenHouseMap from "./../../OpenHouseMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";
import "./../garage-sale/Map.css";

function OpenHouse() {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <Header />
      </div>
      <div className="container2">
        <OpenHouseMap />
      </div>
      <div className="container2">
        <p style={{ color: "grey", fontSize: "12px", fontWeight: "bold" }}>
          Copyright &#169; 2021 NearMe Inc. - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default OpenHouse;
