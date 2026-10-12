function MentalHealthPortfolioCard() {
  let name = "Peace of Mind";
  let description =
    "Peace of Mind is a mental health journaling app designed to help users reflect on their emotions, track their moods, and rediscover themselves.";
  let liveUrl = "https://peace-of-mind-rouge.vercel.app/";
  let repoUrl = "https://github.com/Laqwanda-Nettles/Peace-of-Mind";
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  );
}

export default MentalHealthPortfolioCard;
