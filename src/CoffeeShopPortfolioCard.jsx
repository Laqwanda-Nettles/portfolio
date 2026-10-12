function CoffeeShopPortfolioCard() {
  let name = "Jazzed Up Coffee";
  let description =
    "This is a project to build a frontend for a coffee shop. The project is connected to my own created MongoDB database.";
  let liveUrl = "https://coffee-shop-frontend-seven.vercel.app/";
  let repoUrl = "https://github.com/Laqwanda-Nettles/coffee-shop-frontend";
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

export default CoffeeShopPortfolioCard;
