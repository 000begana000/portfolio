import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Info from "./Info.jsx";
import Contact from "./Contact.jsx";

export default function Content({ content }) {
  return (
    <div className="content">
      {content === "home" && <Home />}
      {content === "projects" && <Projects />}
      {content === "info" && <Info />}
      {content === "contact" && <Contact />}
    </div>
  );
}
