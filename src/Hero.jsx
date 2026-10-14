import imageUrl from "./image-url.js";
import "./hero.css";

function Hero() {
  const src = imageUrl(1200, 500);
  return (
    <div className="hero">
      <img src={src} alt="Flowers in a clay vase" />
    </div>
  );
}

export default Hero;
