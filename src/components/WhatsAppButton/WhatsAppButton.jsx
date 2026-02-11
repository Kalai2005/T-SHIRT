import "./whatsapp.css";
import whatsappIcon from "../../assets/icons/whatsapp.png";

const WhatsAppButton = () => {
  const sendWhatsApp = () => {
    const phone = "919894588717"; // your number
    const message = "Hello 👋 I want to know more about your products.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className="whatsapp-float-img" onClick={sendWhatsApp}>
      <img src={whatsappIcon} alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton;
