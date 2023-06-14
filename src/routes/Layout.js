import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Lista de productos</Link>
        {" - "}
        <Link to="/Contactos">Contactos</Link>
        {"  "}
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
