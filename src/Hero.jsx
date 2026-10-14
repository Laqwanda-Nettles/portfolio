import imageUrl from "./image-url.js";
import "./hero.css";

function Hero() {
  const src = imageUrl(1200, 500, -30);
  return (
    <div className="hero">
      <img src={src} alt="Japan night view" />
      <h2>Full Stack Developer</h2>
    </div>
  );
}

export default Hero;
