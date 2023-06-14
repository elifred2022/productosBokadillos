//import React from "react";
//import React, { useContext } from "react";
//import Hela from "../../imagenes/tequeHeladera.png";
//import Black from "../../imagenes/tequeBlack.PNG";
//import { DataContext } from "../../context/Dataprovider";
//import { ProductoItem } from "./ProductosItem";

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductoItem } from "./ProductosItem";

export const ProductosLista = () => {
  //const value = useContext(DataContext);
  //const [productos] = value.productos;

  return (
    <>
      <h1 className="title"></h1>

      <ProductoItem />

      <Link to={"/Contactos"}>Contactenos</Link>
    </>
  );
};

/*

 {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
          />
        ))}

        */
