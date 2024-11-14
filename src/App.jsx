import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <div className="background">
      <div className="container">
        <header>
          <h3>Begana Choi</h3>
          <p>front-end developer</p>
        </header>
        <div className="main">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
