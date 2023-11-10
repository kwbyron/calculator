import { useState } from "react";

function App() {
  return (
    <>
      <Main>
        <Header>
          <Toggle />
        </Header>
        <Output />
        <Inputs />
      </Main>
    </>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Header({ children }) {
  return (
    <div className="header">
      <p>calc</p>
      {children}
    </div>
  );
}

function Output() {
  return (
    <div className="output">
      <p>123,456</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="inputs">
      <button className="btn number" id="seven">
        7
      </button>
      <button className="btn number" id="eight">
        8
      </button>
      <button className="btn number" id="nine">
        9
      </button>
      <button className="btn" id="delete">
        DEL
      </button>
      <button className="btn number" id="four">
        4
      </button>
      <button className="btn number" id="five">
        5
      </button>
      <button className="btn number" id="six">
        6
      </button>
      <button className="btn operation" id="plus">
        +
      </button>
      <button className="btn number" id="one">
        1
      </button>
      <button className="btn number" id="two">
        2
      </button>
      <button className="btn number" id="three">
        3
      </button>
      <button className="btn operation" id="minus">
        -
      </button>
      <button className="btn operation" id="dot">
        .
      </button>
      <button className="btn number" id="zero">
        0
      </button>
      <button className="btn operation" id="divide">
        /
      </button>
      <button className="btn operation" id="multipe">
        x
      </button>
      <button className="btn" id="reset">
        RESET
      </button>
      <button className="btn" id="equal">
        =
      </button>
    </div>
  );
}

function Toggle() {
  return (
    <div className="toggle">
      <p>THEME</p>
      <div className="slider">
        <p>1 2 3</p>
      </div>
    </div>
  );
}

export default App;
