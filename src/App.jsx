import Header from "./Header";
import About from "./About";
import Fortune from "./Fortune";
import Footer from "./Footer";
import GitHubLink from "./GitHubLink";
import ProjectCount from "./ProjectCount";

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <About />
      <GitHubLink />
      <ProjectCount />
      <Footer />
    </div>
  );
}

export default App;
