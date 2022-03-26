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
            {/*Pick up Card*/}
            <div className="menu_cards">
              <Card
                src="https://images.theconversation.com/files/143038/original/image-20161025-28394-e2lq5k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                title="Pick-up Sport Games"
                desc="Find sport games near you!"
                page="callup"
              />
              {/*Open House Card*/}
              <Card
                src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg"
                title="Open Houses"
                desc="Find open houses near you!"
                page="open-house"
              />
              {/*Garage Sale Card*/}
              <Card
                src="http://freecanada.net/wp-content/uploads/2019/07/Canadian-garage-sale.jpg"
                title="Garage Sales"
                desc="Find garage sales near you!"
                page="garage-sale"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Menu;
