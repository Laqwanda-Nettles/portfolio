import { useState } from "react";

function RecipeAppPortfolioCard() {
  const name = "What's for Dinner?";
  const description =
    "This project was built using the techniques I've learned in class: API integration, object-oriented programming, and SCSS 7-1 architecture. It consists of three pages: landing, home, and about.";
  const details =
    "A class-oriented JavaScript app that fetches recipes from a food API, styled with HTML, CSS, and SASS using the 7-1 architecture.";
  const liveUrl = "https://laqwanda-nettles.github.io/Recipe-App/";
  const repoUrl = "https://github.com/Laqwanda-Nettles/Recipe-App";
  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = description;
  if (open) {
    text = description + " " + details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article>
      <h2>{name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default RecipeAppPortfolioCard;
