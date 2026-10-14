import Header from "./Header";
import About from "./About";
import Fortune from "./Fortune";
import Footer from "./Footer";
import GitHubLink from "./GitHubLink";
import ProjectCount from "./ProjectCount";
import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import projects from "./projects";
import Section from "./Section";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Section title="Today's Fortune">
        <Fortune />
      </Section>
      <About />
      <GitHubLink />
      <ProjectCount />
      <Section title="Projects">
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
