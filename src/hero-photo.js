import imageUrl from "./image-url.js";

const heroPhoto = (width, height, brightness, sat, description) => {
  const src = imageUrl(width, height, brightness, sat);
  const alt = description;
  return [src, alt];
};

export default heroPhoto;
