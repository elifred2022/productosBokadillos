import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProductosLista } from "./components/productos";
import { Contactos } from "./components/contactos";
import { Layout } from "./routes/Layout";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/contactos/WhatsApp";
//import { FloatingWhatsApp } from "react-floating-whatsapp"; lo use en el componente whatsapp aparte

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductosLista />} />
        <Route path="Contactos" element={<Contactos />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
    <WhatsAppButton />
  </BrowserRouter>
);

//  ROUTER DOM ; https://www.youtube.com/watch?v=JNhhdkCuyog

/*
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./routes/Layout";
import { ProductosLista } from "./components/productos/index";
import { Contactos } from "./components/contactos/index";
import { Header } from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductosLista />,
    errorElement: <h1>Error</h1>,
  },

  {
    path: "/Contactos",
    element: <Contactos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <RouterProvider router={router} />
  </div>
);

reportWebVitals();
*/
