import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Contents/Content.jsx";
import ThreeParticles from "./components/ThreeParticles.jsx";

function App() {
  const [content, setContent] = useState("home");

  function handleChangeContent(selectedButton) {
    setContent(selectedButton);
  }

  return (
    <>
      <ThreeParticles />
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1, // Place this above the background
          color: "white",
          textAlign: "center",
          paddingTop: "25vh",
        }}
      >
        <header>
          <h3>Begana Choi</h3>
          <p>front-end developer</p>
        </header>
        <div className="main">
          <Sidebar onSelect={handleChangeContent} />
          <Content content={content} />
        </div>
      </div>
    </>
  );
}

export default App;
