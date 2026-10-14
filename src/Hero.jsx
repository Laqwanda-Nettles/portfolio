import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const [src, alt] = heroPhoto(1200, 500, -30, 0, "Japan night view");
  return (
    <div className="hero">
      <img src={src} alt={alt} />
      <h2>Full Stack Developer</h2>
    </div>
  );
}

export default Hero;
