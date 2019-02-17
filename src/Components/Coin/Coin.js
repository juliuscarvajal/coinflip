import React from "react";
import { connect } from "react-redux";
import { HEADS, TAILS } from "../../common/constants";
import "./Coin.css";

export const Coin = ({ side }) => (
  <div className="Coin">
    <p className="Coin-text">{side ? HEADS : TAILS}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    side: state.side
  };
};

export default connect(mapStateToProps)(Coin);
