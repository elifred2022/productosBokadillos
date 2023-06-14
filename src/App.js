import React from "react";

import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
//import { ProductosLista } from "./componentes/productos/index"; ////   <ProductosLista /> esto va en la funcion export*/
//import "boxicons";
//import { BrowserRouter as Router } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductosLista } from "./components/productos";
import { Contactos } from "./components/contactos";

//import { router } from "./routes/Paginas";

function App() {
  return <h1></h1>;
}

export default App;

/* <Paginas /> 

<ProductosLista />
      <Contactos />
      
      se esta llamando el router desde el index.js

      */

// https://www.youtube.com/watch?v=iPNt12IdbCU; otra maera de react router

// https://www.youtube.com/watch?v=nqOuMmdHAlU integrar ws con react

// NOTA: no se uso el App.js se esta renderizando desde index.js para utiliar el react ruter dom
