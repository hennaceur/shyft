import React from "react";
import OpenHouseMap from "../../OpenHouseMap";
import Header from "../menu/Header";
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
    </div>
  );
}

export default OpenHouse;
