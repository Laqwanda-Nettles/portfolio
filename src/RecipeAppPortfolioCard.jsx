function RecipeAppPortfolioCard() {
  let name = "What's for Dinner?";
  let description =
    "This project was built using the techniques I've learned in class: API integration, object-oriented programming, and SCSS 7-1 architecture. It consists of three pages: landing, home, and about.";
  let liveUrl = "https://laqwanda-nettles.github.io/Recipe-App/";
  let repoUrl = "https://github.com/Laqwanda-Nettles/Recipe-App";
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

export default RecipeAppPortfolioCard;
