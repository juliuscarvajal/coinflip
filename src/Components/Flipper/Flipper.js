import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SideActions from "../../common/actions";
import "./Flipper.css";

const Flipper = ({ getRandomSide }) => (
  <button className="Flipper" onClick={getRandomSide}>
    Flip Coin
  </button>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(SideActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Flipper);
