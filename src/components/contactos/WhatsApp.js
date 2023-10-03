import React from "react";
import axios from "axios";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://wa.me/+5491127003907?text=Hola buen día para todos,  
        recuerda que atendemos en nuestro local AV ARIETA 2688 LOCAL 9 SAN JUSTO Lun a Vie De 14 a 19hrs.
        
        Hcemos pasapalos picadas para eventos fines de semana
         
        Tenemos las zonas de deliverys, zona oeste; Ramos Mejia, San Justo, Haedo, Moron y Castelar.

        pedidos al mayor sin costo, a todas las zonas CABA y GBA
        
        Realiza tu pedido.

        Formas de pago
        Efectivo,
        transferencia al alias: boka23, 
        Todo pago electrónico sera aceptado una vez verificado su efectividad en cuenta.
        
        Estamos para servirte🤗"
        target="_blank"
      >
        <FloatingWhatsApp />
      </a>
    </div>
  );
};
