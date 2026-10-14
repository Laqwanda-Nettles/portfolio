import imageUrl from "./image-url.js";

const heroPhoto = (width, height, brightness, description) => {
  const src = imageUrl(width, height, brightness);
  const alt = description;
  return [src, alt];
};

export default heroPhoto;
