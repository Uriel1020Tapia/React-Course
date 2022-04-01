import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RComponent from "./components/Component";
import MyComponent from "./components/RComponent";
import RProperties from "./components/Properties";

import State from "./components/State";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RComponent msg="I'm from a component!!!"></RComponent>
        <MyComponent msg="I'm from a component expresado" />
        <RProperties
          text="This is a string"
          number={2022}
          bool={true}
          arr={[1, 2, 3]}
          obj={{ title: "react", id: 1 }}
          elementReact={
            <i>
              Esto es un <b>elemento</b> react
            </i>
          }
          function={num => num*num}
          componentReact={<MyComponent msg="I'm component from props"></MyComponent>}
        />
        <hr/>
        <State/>
      </header>
    </div>
  );
}

export default App;
