import React, { useContext } from "react";
import Black from "../../imagenes/tequeBlack.PNG";
import Perco from "../../imagenes/tequeMayor.png";
import Salsa from "../../imagenes/tequeSalsa.PNG";
import Monton from "../../imagenes/tequeMonton.png";

import Queso from "../../imagenes/quesollaner.png";
import HarinaArepa from "../../imagenes/harinaArepa.png";
import Coca from "../../imagenes/coca.png";
import Malta from "../../imagenes/malta.png";
//import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export const ProductoItem = ({ id, title, price, image, category }) => {
  return (
    <div className="productos">
      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Perco} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños al Mayor a partir de 15 docenas</h1>
          <p>Congelados</p>
          <p className="price">$ 730</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Black} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños al menor</h1>
          <p>Congelados</p>
          <p className="price">$ 850</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Salsa} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Seis (6) tequeños fritos mas salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 1000</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Monton} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Doce (12) tequeños fritos mas salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 1800</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Queso} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Queso llanero semi duro</h1>
          <p>Alimentos</p>
          <p className="price">$ 2030 x kg</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={HarinaArepa} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Harina de maiz para arepas Morixe 1 kg</h1>
          <p>Alimentos</p>
          <p className="price">$ 730</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Malta} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Malta lata</h1>
          <p>Bebidas</p>
          <p className="price">$ 460</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Coca} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Cocacola sabor original 354 ml</h1>
          <p>Bebidas</p>
          <p className="price">$ 280</p>
        </div>
      </div>
    </div>
  );
};
