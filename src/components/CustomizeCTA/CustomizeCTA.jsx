import "./customizeCTA.css";

const CustomizeCTA = () => {
  return (
    <section className="customize-cta">
      <h2>Customize Your Own Design</h2>

      <p>
        Upload your design or create a custom T-shirt or hoodie
        in just a few steps.
      </p>

      <a href="/customize" className="customize-cta-btn">
        Customize Now <span>→</span>
      </a>
    </section>
  );
};

export default CustomizeCTA;
