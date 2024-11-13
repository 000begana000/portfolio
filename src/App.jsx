import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
      <header>
        <h3>Begana Choi</h3>
        <p>front-end developer</p>
      </header>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
