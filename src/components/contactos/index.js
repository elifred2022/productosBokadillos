import React from "react";
import emailjs from "@emailjs/browser";
//import Picture from "../../imagenes/mapa.JPG";
import { Link } from "react-router-dom";

export const Contactos = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_04ub10z",
      "template_gzz4xu5",
      event.target,
      "Lfqdb8OfXO68L-vVt"
    );
    alert("Su mensaje fue enviado con exito");
    //   .then((response) => console.log(response))
    // .catch((error) => console.log(error));
  };

  return (
    <div className="div-form">
      <h1 className="title">Contactenos</h1>

      <form className="form-mail" onSubmit={sendEmail}>
        <label>Nombre y Apellido</label>
        <input type="text" name="user_name" />
        <hr />

        <label>Email</label>
        <input type="email" name="user_email" />
        <hr />

        <label>Telefono</label>
        <input type="number" name="user_phone" />
        <hr />

        <label>Deja tu mensaje</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Enviar</button>
      </form>

      <Link to={"/"}>Volver a productos</Link>
      <div>
        <p>Av Arieta 2688 local 9, San Justo</p>
        <p>Cel. 1127003907</p>
      </div>
    </div>
  );
};

// npm install @emailjs/browser --save
