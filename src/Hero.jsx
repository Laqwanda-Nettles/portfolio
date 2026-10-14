import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const [sat, setSat] = useState(0);

  const showColor = () => {
    setSat(0);
  };

  const showBlackAndWhite = () => {
    setSat(-100);
  };

  const [src, alt] = heroPhoto(1200, 500, -30, sat, "Japan night view");
  return (
    <>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>Full Stack Developer</h2>
      </div>
      <div>
        <button onClick={showColor}>Color</button> &nbsp;
        <button onClick={showBlackAndWhite}>Black & White</button>
      </div>
    </>
  );
}

export default Hero;
