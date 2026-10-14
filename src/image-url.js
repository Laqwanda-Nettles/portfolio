const imageUrl = (width, height, brightness, sat) =>
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format&bri=" +
  brightness +
  "&sat=" +
  sat;

export default imageUrl;
