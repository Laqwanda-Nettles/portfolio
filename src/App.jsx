import Header from "./Header";
import About from "./About";
import Fortune from "./Fortune";
import Footer from "./Footer";
import GitHubLink from "./GitHubLink";
import ProjectCount from "./ProjectCount";
import MentalHealthPortfolioCard from "./MentalHeathPortfolioCard";
import CoffeeShopPortfolioCard from "./CoffeeShopPortfolioCard";
import RecipeAppPortfolioCard from "./RecipeAppPortfolioCard";
import Hero from "./Hero";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <About />
      <GitHubLink />
      <ProjectCount />
      <MentalHealthPortfolioCard />
      <CoffeeShopPortfolioCard />
      <RecipeAppPortfolioCard />
      <Footer />
    </div>
  );
}

export default App;
