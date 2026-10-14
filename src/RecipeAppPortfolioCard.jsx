import { useState } from "react";

function RecipeAppPortfolioCard() {
  const project = {
    name: "What's for Dinner?",
    description:
      "This project was built using the techniques I've learned in class: API integration, object-oriented programming, and SCSS 7-1 architecture. It consists of three pages: landing, home, and about.",
    details:
      "A class-oriented JavaScript app that fetches recipes from a food API, styled with HTML, CSS, and SASS using the 7-1 architecture.",
    liveUrl: "https://laqwanda-nettles.github.io/Recipe-App/",
    repoUrl: "https://github.com/Laqwanda-Nettles/Recipe-App",
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

export default RecipeAppPortfolioCard;
