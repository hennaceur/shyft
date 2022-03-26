import React from "react";
import Maps from "./../../Maps";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";

function GarageSale() {
  return (
    <div className="">
      <Header />
      <div>
        <Maps></Maps>
        <div className="inner">
          <form>
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GarageSale;
