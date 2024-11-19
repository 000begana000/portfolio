import Home from "./Home.jsx";
import Projects from "../pages/Projects.jsx";
import Info from "../pages/Info.jsx";
import Contact from "../pages/Contact.jsx";

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
