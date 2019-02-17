import React from "react";
import { connect } from "react-redux";
import { HEADS, TAILS } from "../../common/constants";
import "./Coin.css";

const toSideText = side => (side ? HEADS : TAILS);

export const Coin = ({ side }) => {
  const sideText = toSideText(side);
  return (
    <div className={`Coin Coin-${sideText}`}>
      <p className="Coin-text">{sideText}</p>
    </div>
  );
};

const mapStateToProps = ({ side }) => ({
  side
});

export default connect(mapStateToProps)(Coin);
