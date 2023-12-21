import React from "react";
import axios from "axios";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://wa.me/+5491137728964?text=Hola buen día,  
        🤗"
        target="_blank"
      >
        <FloatingWhatsApp />
      </a>
    </div>
  );
};
