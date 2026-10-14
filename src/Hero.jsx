import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const photos = [
    {
      id: "photo-1542051841857-5f90071e7989",
      description: "japanese city night view",
    },
    {
      id: "photo-1526481280693-3bfa7568e0f3",
      description:
        "tranditional japanese building with Mt. Fuji in the background",
    },
    {
      id: "photo-1524413840807-0c3cb6fa808d",
      description: "skura flower viewing under a bridge",
    },
  ];

  const [index, setIndex] = useState(0);
  const [sat, setSat] = useState(0);

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showColor = () => {
    setSat(0);
  };

  const showBlackAndWhite = () => {
    setSat(-100);
  };

  const { id, description } = photos[index];
  const [src, alt] = heroPhoto({
    photo: id,
    width: 1200,
    height: 500,
    brightness: -30,
    sat,
    description: description,
  });
  return (
    <>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>Full Stack Developer</h2>
      </div>
      <div>
        <button onClick={previousPhoto}>Previous</button> &nbsp;
        <button onClick={nextPhoto}>Next</button> &nbsp;
        <button onClick={showColor}>Color</button> &nbsp;
        <button onClick={showBlackAndWhite}>Black & White</button>
      </div>
    </>
  );
}

export default Hero;
