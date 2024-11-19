import { Link } from "react-router-dom";

export default function MainNavitation() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/info">info</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
