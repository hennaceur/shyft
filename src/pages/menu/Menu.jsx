import React from "react";
import "./Menu.css";
import Header from "./Header";
import Card from "./Card";

function Menu() {
  return (
    <body className="menu_body">
      <div>
        <div className="waveWrapperInner">
          <div className="Menu">
            {/*NearMe Header*/}
            <Header />
            <div className="menu_cards">
              {/*Open House Card*/}
              <Card
                src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg"
                title="Open Houses"
                desc="Find open houses near you!"
                page="open-house"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Menu;
