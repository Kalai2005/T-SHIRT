import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const phoneNumber = '1234567890';
  const message = 'Hello! I am interested in your products.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <span>💬</span>
    </a>
  );
};

export default WhatsAppFloat;
