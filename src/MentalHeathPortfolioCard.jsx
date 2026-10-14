import { useState } from "react";

function MentalHealthPortfolioCard() {
  const project = {
    name: "Peace of Mind",
    description:
      "Peace of Mind is a mental health journaling app designed to help users reflect on their emotions, track their moods, and rediscover themselves.",
    details:
      "Inspired by the Lauryn Hill song 'I Gotta Peace of Mind' and my own journey of self-discovery, this app creates a safe space for users to pause, reflect, and find clarity in their lives.",
    liveUrl: "https://peace-of-mind-rouge.vercel.app/",
    repoUrl: "https://github.com/Laqwanda-Nettles/Peace-of-Mind",
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

export default MentalHealthPortfolioCard;
