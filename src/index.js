import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //librerias BrowserRouter del dom Permite guardar propiedades del historial de naveganación//
//permite unir las rutas del spa con cada uno de los componentes

import "./index.css";
import App from "./App";//spa
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(  //mustra la pagina
  <BrowserRouter> 
    <App />
  </BrowserRouter>,    //envuelve el app con BrowserRouter,app maneja las sistema rutas dentro de estos los componentes:crear, listar y demás
  document.getElementById("root")
);

serviceWorker.unregister();


