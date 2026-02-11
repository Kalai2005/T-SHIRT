import "./Hero.css";
import heroImg from "../../assets/images/hero-image.png"; // 🔁 change path if needed

const HeroSection = () => {
  return (
    <section className="hero-minimal">
      <div className="hero-content">

        
        <div className="hero-left">
          <h1>Premium T-Shirts & Hoodies</h1>

          <p>
            Discover stylish and comfortable T-shirts and hoodies designed
            for everyday wear and modern street fashion.
          </p>

          <a href="/products" className="hero-btn">
            Explore Collection
          </a>
        </div>

      
        <div className="hero-right">
          <div className="hero-img-box">
            <img src={heroImg} alt="Hero Product" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
