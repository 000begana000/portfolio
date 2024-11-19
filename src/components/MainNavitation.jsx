export default function MainNavitation({ onSelect }) {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <button onClick={() => onSelect("home")}>home</button>
        </li>
        <li>
          <button onClick={() => onSelect("projects")}>projects</button>
        </li>
        <li>
          <button onClick={() => onSelect("info")}>info</button>
        </li>
        <li>
          <button onClick={() => onSelect("contact")}>contact</button>
        </li>
      </ul>
    </nav>
  );
}
