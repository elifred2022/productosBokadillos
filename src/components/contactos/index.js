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
        <a
          className="mapa"
          href="https://www.google.com/maps/place/Dr.+Ignacio+Arieta+2688+Local+9,+B1754+San+Justo,+Provincia+de+Buenos+Aires/@-34.6747031,-58.5678608,16.75z/data=!4m6!3m5!1s0x95bcc62df97d7871:0x55388c7fd0b2f72c!8m2!3d-34.6747034!4d-58.5654341!16s%2Fg%2F11jz8whk8s?authuser=0&entry=ttu"
        >
          Av Arieta 2688 local 9, San Justo
        </a>
        <br></br>
        <a
          className="rrss"
          href="https://www.instagram.com/bokadillosweb/?hl=es"
        >
          @bokadillosweb
        </a>
      </div>
    </div>
  );
};

// npm install @emailjs/browser --save
