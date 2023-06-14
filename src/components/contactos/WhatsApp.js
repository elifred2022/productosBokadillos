import React from "react";
import axios from "axios";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://wa.me/+5491127003907?text=Dejame tu comentario y sugerencias en breve te contestare"
        target="_blank"
      >
        <FloatingWhatsApp />
      </a>
    </div>
  );
};
