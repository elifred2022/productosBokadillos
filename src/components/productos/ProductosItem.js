import React, { useContext } from "react";
import Black from "../../imagenes/tequeBlack.PNG";
import Perco from "../../imagenes/tequeMayor.png";
import Salsa from "../../imagenes/tequeSalsa.PNG";
import Monton from "../../imagenes/tequeMonton.png";
import Queso from "../../imagenes/quesollaner.png";
import Quesorayado from "../../imagenes/quesoLlaneroRayado.png";
import PastelitosPack from "../../imagenes/pastelitosPacks.png";
import HarinaArepa from "../../imagenes/harinaArepa.png";
import Coca from "../../imagenes/coca.png";
import Malta from "../../imagenes/malta.png";
import Pastel from "../../imagenes/pastelCumple.png";
import Chicha from "../../imagenes/chicha.png";
import Rekolita from "../../imagenes/rekolita.png";
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
          <p className="price">$ 750</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Black} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños al detal</h1>
          <p>Congelados</p>
          <p className="price">$ 850</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={PastelitosPack} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Pastelitos de queso pack de 2 unds</h1>
          <p>Congelados</p>
          <p className="price">$ 400</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={PastelitosPack} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Pastelitos de carne pack de 2 unds</h1>
          <p>Congelados</p>
          <p className="price">$ 500</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={PastelitosPack} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Pastelitos de jamon y queso pack de 2 unds</h1>
          <p>Congelados</p>
          <p className="price">$ 500</p>
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
            <img src={Chicha} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Chicha</h1>
          <p>Bebidas</p>
          <p className="price">$ 350 vaso 300 cc</p>
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
            <img src={Quesorayado} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Queso llanero rayado</h1>
          <p>Alimentos</p>
          <p className="price">$ 200 x 100 gramos</p>
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
          <p className="price">$ 920</p>
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
            <img src={Rekolita} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Rekolita</h1>
          <p>Bebidas</p>
          <p className="price">$ 400</p>
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
          <p className="price">$ 300</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Pastel} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Pasteles para Cumpleaños, Bodas y eventos</h1>
          <p>Reposteria</p>
          <p className="price">$ segun presupuesto</p>
        </div>
      </div>
    </div>
  );
};
