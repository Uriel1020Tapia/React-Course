import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RComponent from "./components/Component";
import MyComponent from "./components/RComponent";
import RProperties from "./components/Properties";

import State from "./components/State";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventsES6,EventsES7,MasSobreEventos} from "./components/Events";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxAPIS";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHook";
import AjaxHooks from "./components/AjaxHooks";
import HooksCustom from "./components/HooksCustom";
import Referencias from "./components/Referencias";
import Formulario from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponenteEstilizados";

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
        <br/>
        <RenderizadoCondicional/>
        <br/>
        <RenderizadoElementos/>
        <br></br>
        <EventsES6/>
        <hr/>
        <EventsES7/>
        <hr/>
        <MasSobreEventos/>
        <br></br>
        <Padre/>
        <br/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
          <ContadorHooks titulo="Seguidores"/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksCustom/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formulario/>
          <hr/>
          <Estilos/>
          <hr/>
          <ComponentesEstilizados/>
          <hr/>
      </header>
    </div>
  );
}

export default App;
