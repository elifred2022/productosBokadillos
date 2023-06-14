import Boka from "../../imagenes/logoBoka.png";

import { Layout } from "../../routes/Layout";

export const Header = () => {
  return (
    <header>
      <img src={Boka} alt="logo" width={150} />

      <Layout />
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
