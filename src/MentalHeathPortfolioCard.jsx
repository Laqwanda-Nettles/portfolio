import { useState } from "react";

function MentalHealthPortfolioCard() {
  const name = "Peace of Mind";
  const description =
    "Peace of Mind is a mental health journaling app designed to help users reflect on their emotions, track their moods, and rediscover themselves.";
  const liveUrl = "https://peace-of-mind-rouge.vercel.app/";
  const repoUrl = "https://github.com/Laqwanda-Nettles/Peace-of-Mind";
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default MentalHealthPortfolioCard;
