import { useState } from "react";

function App() {
  const [temporaryValue, setTemporaryValue] = useState("");
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState("");
  const [toggleSelection, setToggleSelection] = useState("theme1");

  function handleSetToggleSelection() {
    setToggleSelection((toggleSelection) =>
      toggleSelection === "theme1"
        ? "theme2"
        : toggleSelection === "theme2"
        ? "theme3"
        : toggleSelection === "theme3" && "theme1"
    );

    if (toggleSelection === "theme1") {
      document.body.classList.add("theme2");
      document.body.classList.remove("theme1");
    } else if (toggleSelection === "theme2") {
      document.body.classList.add("theme3");
      document.body.classList.remove("theme2");
    } else if (toggleSelection === "theme3") {
      document.body.classList.add("theme1");
      document.body.classList.remove("theme3");
    }
  }

  function handleSetTemporaryValue(val) {
    setTemporaryValue((temporaryValue) => temporaryValue + val);
  }

  function handleSetOperator(op) {
    if (!operator && !temporaryValue && op) {
      setTemporaryValue("");
      setOperator("");
    } else if (!operator && temporaryValue) {
      setTotal((total) => Number(temporaryValue));
      setTemporaryValue("");
      setOperator((operator) => op);
    } else if (!temporaryValue) {
      setOperator((operator) => op);
    } else if (operator === "+") {
      setTotal((total) => (total += Number(temporaryValue)));
      setTemporaryValue("");
      setOperator((operator) => op);
    } else if (operator === "-") {
      setTotal((total) => (total -= Number(temporaryValue)));
      setTemporaryValue("");
      setOperator((operator) => op);
    } else if (operator === "x") {
      setTotal((total) => (total *= Number(temporaryValue)));
      setTemporaryValue("");
      setOperator((operator) => op);
    } else if (operator === "/") {
      setTotal((total) => (total /= Number(temporaryValue)));
      setTemporaryValue("");
      setOperator((operator) => op);
    } else if (op === "=") {
      setTotal((total) => (total = Number(temporaryValue)));
      setTemporaryValue("");
      setOperator((operator) => "");
    }
  }

  function handleResetInput() {
    setTemporaryValue((temporaryValue) => "");
    setTotal(0);
    setOperator("");
  }

  function handleDeleteTemporaryCharacter() {
    setTemporaryValue((temporaryValue) => temporaryValue.slice(0, -1));
  }

  return (
    <>
      <Main>
        <Header toggleSelection={toggleSelection}>
          <Toggle
            toggleSelection={toggleSelection}
            onSetToggleSelection={handleSetToggleSelection}
          />
        </Header>
        <Output
          total={total}
          temporaryValue={temporaryValue}
          toggleSelection={toggleSelection}
        />
        <Inputs
          onSetTemporaryValue={handleSetTemporaryValue}
          onSetOperator={handleSetOperator}
          onResetInput={handleResetInput}
          onDeleteTemporaryCharacter={handleDeleteTemporaryCharacter}
          toggleSelection={toggleSelection}
        />
      </Main>
    </>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Header({ children, toggleSelection }) {
  return (
    <div className={`header ${toggleSelection}`}>
      <p>calc</p>
      {children}
    </div>
  );
}

function Output({ total, temporaryValue, toggleSelection }) {
  return (
    <div className={`output ${toggleSelection}`}>
      <p>{temporaryValue ? temporaryValue : total}</p>
    </div>
  );
}

function Inputs({
  onSetOperator,
  onSetTemporaryValue,
  onResetInput,
  onDeleteTemporaryCharacter,
  toggleSelection,
}) {
  return (
    <div className={`inputs ${toggleSelection}`}>
      <button
        onClick={() => onSetTemporaryValue(7)}
        className={`btn number ${toggleSelection}`}
        id="seven"
      >
        7
      </button>
      <button
        onClick={() => onSetTemporaryValue(8)}
        className={`btn number ${toggleSelection}`}
        id="eight"
      >
        8
      </button>
      <button
        onClick={() => onSetTemporaryValue(9)}
        className={`btn number ${toggleSelection}`}
        id="nine"
      >
        9
      </button>
      <button
        onClick={() => onDeleteTemporaryCharacter()}
        className="btn"
        id="delete"
      >
        DEL
      </button>
      <button
        onClick={() => onSetTemporaryValue(4)}
        className={`btn number ${toggleSelection}`}
        id="four"
      >
        4
      </button>
      <button
        onClick={() => onSetTemporaryValue(5)}
        className={`btn number ${toggleSelection}`}
        id="five"
      >
        5
      </button>
      <button
        onClick={() => onSetTemporaryValue(6)}
        className={`btn number ${toggleSelection}`}
        id="six"
      >
        6
      </button>
      <button
        onClick={() => onSetOperator("+")}
        className={`btn operation ${toggleSelection}`}
        id="plus"
      >
        +
      </button>
      <button
        onClick={() => onSetTemporaryValue(1)}
        className={`btn number ${toggleSelection}`}
        id="one"
      >
        1
      </button>
      <button
        onClick={() => onSetTemporaryValue(2)}
        className={`btn number ${toggleSelection}`}
        id="two"
      >
        2
      </button>
      <button
        onClick={() => onSetTemporaryValue(3)}
        className={`btn number ${toggleSelection}`}
        id="three"
      >
        3
      </button>
      <button
        onClick={() => onSetOperator("-")}
        className={`btn operation ${toggleSelection}`}
        id="minus"
      >
        -
      </button>
      <button
        onClick={() => onSetTemporaryValue(".")}
        className={`btn operation ${toggleSelection}`}
        id="dot"
      >
        .
      </button>
      <button
        onClick={() => onSetTemporaryValue(0)}
        className={`btn number ${toggleSelection}`}
        id="zero"
      >
        0
      </button>
      <button
        onClick={() => onSetOperator("/")}
        className={`btn operation ${toggleSelection}`}
        id="divide"
      >
        /
      </button>
      <button
        onClick={() => onSetOperator("x")}
        className={`btn operation ${toggleSelection}`}
        id="multipe"
      >
        x
      </button>
      <button
        onClick={() => onResetInput()}
        className={`btn ${toggleSelection}`}
        id="reset"
      >
        RESET
      </button>
      <button
        onClick={() => onSetOperator("=")}
        className={`btn ${toggleSelection}`}
        id="equal"
      >
        =
      </button>
    </div>
  );
}

function Toggle({ toggleSelection, onSetToggleSelection }) {
  return (
    <div className="toggle">
      <p>THEME</p>
      <div className="toggle-selector">
        <p>1 2 3</p>
        <div className={`slider ${toggleSelection}`}>
          <div
            onClick={() => onSetToggleSelection()}
            className={`${toggleSelection === "theme1" ? "active-theme" : ""}`}
            id="left"
          ></div>
          <div
            onClick={() => onSetToggleSelection()}
            className={`${toggleSelection === "theme2" ? "active-theme" : ""}`}
            id="center"
          ></div>
          <div
            onClick={() => onSetToggleSelection()}
            className={`${toggleSelection === "theme3" ? "active-theme" : ""}`}
            id="right"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
