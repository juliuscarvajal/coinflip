import React from "react";
import logo from "./coin-svgrepo-com.svg";
import Coin from "./components/Coin";
import Flipper from "./components/Flipper";
import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <h2>Welcome to Coin Flipper</h2>
    </div>
    <main className="Home-main">
      <section className="Home-main-section">
        <Coin />
      </section>
      <section>
        <Flipper />
      </section>
    </main>
    <footer className="Home-footer" />
  </div>
);

export default Home;
