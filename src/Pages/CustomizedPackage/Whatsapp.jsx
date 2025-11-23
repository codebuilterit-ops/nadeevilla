import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // npm install react-icons

const WhatsAppButton = () => {
  const phoneNumber = "94719780312"; // your WhatsApp number
  const message = "Hello! I want to know more about your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
