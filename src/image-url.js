const imageUrl = ({ photo, width, height, brightness, sat }) =>
  "https://images.unsplash.com/" +
  photo +
  "?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format&bri=" +
  brightness +
  "&sat=" +
  sat;

export default imageUrl;
