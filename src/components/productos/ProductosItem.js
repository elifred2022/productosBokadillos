import React, { useContext } from "react";
import Black from "../../imagenes/tequeBlack.PNG";
import Perco from "../../imagenes/tequeMayor.png";
import Salsa from "../../imagenes/tequeSalsa.PNG";
import Monton from "../../imagenes/tequeMonton.png";
import Queso from "../../imagenes/quesollaner.png";
import Maple from "../../imagenes/maple.png";
import PastelitosPack from "../../imagenes/pastelitosPacks.png";
import HarinaArepa from "../../imagenes/harinaArepa.png";
import Coca from "../../imagenes/coca.png";
import Malta from "../../imagenes/malta.png";
import Pastel from "../../imagenes/pastelCumple.png";
import Chicha from "../../imagenes/chicha.png";
import ChichaLt from "../../imagenes/chichaLitro.png";
import Rekolita from "../../imagenes/rekolita.png";
import Golfeao from "../../imagenes/golfeao.png";
import Tequechito from "../../imagenes/tequechitos.png";
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
          <h1>Tequeños de queso al Mayor a partir de 15 docenas</h1>
          <p>Congelados</p>
          <p className="price">$ 1400</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Black} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños de queso al detal</h1>
          <p>Congelados</p>
          <p className="price">$ 1600</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Black} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños de queso y panceta al detal</h1>
          <p>Congelados</p>
          <p className="price">$ 2500</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Black} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Tequeños de salchicha al detal</h1>
          <p>Congelados</p>
          <p className="price">$ 1600</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Salsa} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Cuatro (4) tequeños queso fritos mas salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 1150</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Salsa} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Seis (6) tequeños queso fritos mas salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 1600</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Monton} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Doce (12) tequeños queso fritos mas salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 2600</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Monton} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Cincuenta (50) tequeños queso fritos mas (4) salsa de ajo</h1>
          <p>Fritos</p>
          <p className="price">$ 10000</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Tequechito} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Cinco (5) tequeños queso y panceta fritos mas salsa de ajo</h1>
          <p className="price">$ 2000</p>
          <h1>Diez (10) tequeños queso y panceta fritos mas salsa de ajo</h1>
          <p className="price">$ 4000</p>
          <p>Fritos</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Tequechito} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Seis (6) tequeños salchicha fritos mas salsa de ajo</h1>
          <p className="price">$ 1600</p>
          <h1>Doce (12) tequeños salchicha fritos mas salsa de ajo</h1>
          <p className="price">$ 2600</p>
          <p>Fritos</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Golfeao} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Golfao</h1>
          <p>Postre</p>
          <p className="price">$ 500</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={ChichaLt} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Chicha envase 1 litro con canela y leche condensada</h1>
          <p>envio sin cargo zonas aledañas San Justo y Ramos Mejia</p>
          <p className="price">$ 1800 tapa p/llevar</p>
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
          <p className="price">$ 600 vaso 300 cc</p>
          <p className="price">$ 800 vaso 300 cc con tapa p/llevar</p>
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
          <p className="price">$ 3000 x kg</p>
        </div>
      </div>

      <div className="producto">
        <>
          <div className="producto_img">
            <img src={Maple} alt={title} />
          </div>
        </>
        <div className="producto__footer">
          <h1>Maple huevo nro 1 (30 unds)</h1>
          <p>Alimentos</p>
          <p className="price">$ 2500</p>
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
          <p className="price">$ 1350</p>
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
          <p className="price">$ 600</p>
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
          <p className="price">$ 600</p>
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
          <p className="price">$ 450</p>
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

// PRODUCTOS DESINCORPORADOS

/* 


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
      </div> */
