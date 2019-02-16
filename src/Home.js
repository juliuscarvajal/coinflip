import React from "react";
import logo from "./coin-svgrepo-com.svg";
import Coin from "./Components/Coin";
import Flipper from "./Components/Flipper";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Coin Flipper</h2>
        </div>
        <main className="Home-main">
          <section className="Home-main-section">
            <Coin side="heads" />
          </section>
          <section>
            <Flipper />
          </section>
        </main>
        <footer className="Home-footer" />
      </div>
    );
  }
}

export default Home;
