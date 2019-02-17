import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SideActions from "../../common/actions";
import "./Flipper.css";

const Flipper = ({ toggleSide }) => (
  <button className="Flipper" onClick={toggleSide}>
    Flip Coin
  </button>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(SideActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Flipper);
