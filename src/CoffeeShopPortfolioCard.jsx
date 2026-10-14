import { useState } from "react";

function CoffeeShopPortfolioCard() {
  const project = {
    name: "Jazzed Up Coffee",
    description:
      "This is a project to build a frontend for a coffee shop. The project is connected to my own created MongoDB database.",
    details:
      "The Coffee Shop frontend project is a functional web application designed to provide a seamless coffee shopping experience. Users can browse coffee products, manage their accounts, and toggle between dark and light themes. The backend handles authentication, product management, and pagination.",
    liveUrl: "https://coffee-shop-frontend-seven.vercel.app/",
    repoUrl: "https://github.com/Laqwanda-Nettles/coffee-shop-frontend",
  };
  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = project.description;
  if (open) {
    text = project.description + " " + project.details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article>
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>See it live</a> ·{" "}
        <a href={project.repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default CoffeeShopPortfolioCard;
