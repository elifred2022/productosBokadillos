import Boka from "../../imagenes/logoBoka.png";

import { Layout } from "../../routes/Layout";

export const Header = () => {
  return (
    <header>
      <img src={Boka} alt="logo" width={150} />

      <Layout />
      <a
        className="mapa"
        href="https://www.google.com/maps/place/Dr.+Ignacio+Arieta+2688+Local+9,+B1754+San+Justo,+Provincia+de+Buenos+Aires/@-34.6747031,-58.5678608,16.75z/data=!4m6!3m5!1s0x95bcc62df97d7871:0x55388c7fd0b2f72c!8m2!3d-34.6747034!4d-58.5654341!16s%2Fg%2F11jz8whk8s?authuser=0&entry=ttu"
      >
        <p>Av Arieta 2688 local 9, San Justo</p>
      </a>
    </header>
  );
};

/*




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

export const Header = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};




    */

// https://www.npmjs.com/package/react-floating-whatsapp; para colocar el boton de whatsapp
