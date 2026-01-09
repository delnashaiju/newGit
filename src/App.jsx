import { useState, useEffect } from 'react';
import './App.css';

const heroImages = [
  "https://www.yarnspirations.com/cdn/shop/files/BRC0502-38232M.jpg?v=1744135954",
  "https://i.pinimg.com/736x/37/f4/3b/37f43bbc31da31302f50099ee7a5aa31.jpg",
  "https://www.datocms-assets.com/75076/1700509334-ribbed-crochet-edged-scarf-1.jpg?auto=format&w=1300&fit=max",
  "https://www.blingcute.com/cdn/shop/products/taobao_0111_152041_8_1024x1024.jpg?v=1642058911"
];

function App() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Del’s Crochet Creations</h1>
        <nav>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Slider */}
      <section className="hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="hero-text">
          <h2>Handmade with Love</h2>
          <p>Unique crochet creations for your home and gifts</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h2>Our Creations</h2>
        <div className="cards">
          {heroImages.map((img, index) => (
            <div className="card" key={index}>
              <img src={img} alt={`Crochet ${index + 1}`} />
              <h3>Item {index + 1}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              I am a passionate crocheter, turning yarn into cozy, beautiful creations.
              Every piece is handmade with care and attention to detail.
            </p>
          </div>
          <div className="about-image">
            <img src="https://i.pinimg.com/736x/37/f4/3b/37f43bbc31da31302f50099ee7a5aa31.jpg" alt="Crochet work" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email me at <a href="mailto:hello@crochet.com">hello@crochet.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Del’s Crochet Creations
      </footer>
    </div>
  );
}

export default App;
