import "./About.css";

const About = () => {
  return (
    <div className="about-page">

     
      <section className="about-hero-pro">
        <div className="hero-inner">
          <h1>M-Shan Outlets</h1>
          <p>
            Premium custom T-shirts & hoodies crafted with care,
            creativity, and confidence.
          </p>
        </div>
      </section>

      
      <section className="about-block fade-in">
        <h2>Who We Are</h2>
        <p>
          We are a custom apparel brand helping individuals, creators,
          teams, and businesses turn ideas into high-quality wearable designs.
          From concept to print, we focus on clarity, quality, and comfort.
        </p>
      </section>

     
      <section className="about-block alt fade-in">
        <h2>What Makes Us Different</h2>

        <div className="pro-grid">
          <div className="pro-card">
            <span>🎨</span>
            <h4>Live Design Preview</h4>
            <p>See your design on the product before confirming.</p>
          </div>

          <div className="pro-card">
            <span>🧵</span>
            <h4>Premium Fabric</h4>
            <p>Soft, durable materials with long-lasting prints.</p>
          </div>

          <div className="pro-card">
            <span>⚡</span>
            <h4>Easy Ordering</h4>
            <p>Simple customization and quick WhatsApp ordering.</p>
          </div>

          <div className="pro-card">
            <span>🤝</span>
            <h4>Customer First</h4>
            <p>Every order handled with attention to detail.</p>
          </div>
        </div>
      </section>

   
      <section className="about-block fade-in">
        <h2>How It Works</h2>

        <div className="steps-pro">
          <div className="step-pro">
            <span>1</span>
            <p>Upload your design</p>
          </div>
          <div className="step-pro">
            <span>2</span>
            <p>Choose product & size</p>
          </div>
          <div className="step-pro">
            <span>3</span>
            <p>Send via WhatsApp</p>
          </div>
          <div className="step-pro">
            <span>4</span>
            <p>We print & deliver</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-pro">
        <h2>Ready to Create Your Custom Wear?</h2>
        <p>Start designing and bring your idea to life.</p>
        <a href="/customize" className="cta-pro-btn">
          Customize Now
        </a>
      </section>

    </div>
  );
};

export default About;
