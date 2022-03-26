import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={"/" + props.page}
    >
      <div className="card">
        <img src={props.src} alt="" />
        <div className="card_body">
          <h2>{props.title}</h2>
          <h4>{props.desc}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
