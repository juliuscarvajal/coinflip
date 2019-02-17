import React from "react";
import { connect } from "react-redux";
import { HEADS, TAILS } from "../../common/constants";
import "./Coin.css";

const toSideText = side => (side ? HEADS : TAILS);

export const Coin = ({ side }) => (
  <div className="Coin">
    <p className="Coin-text">{toSideText(side)}</p>
  </div>
);

const mapStateToProps = ({ side }) => ({
  side
});

export default connect(mapStateToProps)(Coin);
