import React from "react";
import "./Coin.css";

const Coin = ({ side }) => (
  <div className="Coin">
    <p className="Coin-text">{side}</p>
  </div>
);

export default Coin;
