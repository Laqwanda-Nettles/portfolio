import Header from "./Header";
import About from "./About";
import Fortune from "./Fortune";
import Footer from "./Footer";
import GitHubLink from "./GitHubLink";
import ProjectCount from "./ProjectCount";
import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import projects from "./projects";

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
      <ProjectCard project={projects[0]} />
      <ProjectCard project={projects[1]} />
      <ProjectCard project={projects[2]} />
      <Footer />
    </div>
  );
}

export default App;
