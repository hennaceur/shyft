import React from "react";
import UserMap from "../../User";
import Header from "../menu/Header";
import "./../../css/SearchInput.css";
import "./../garage-sale/Map.css";

function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <Header />
      </div>
      <div className="container2">
        <UserMap />
      </div>
    </div>
  );
}

export default Dashboard;
