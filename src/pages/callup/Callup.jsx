import React from "react";
import CallupMap from "../../CallupMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";
import "./../garage-sale/Map.css";

function Callup() {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <Header />
      </div>
      <div className="container2">
        <CallupMap />
      </div>
      <div className="container2">
        <p style={{ color: "grey", fontSize: "12px", fontWeight: "bold" }}>
          Copyright &#169; 2021 NearMe Inc. - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Callup;
