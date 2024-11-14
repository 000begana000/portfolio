import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Contents/Content.jsx";

function App() {
  const [content, setContent] = useState("home");

  function handleChangeContent(selectedButton) {
    setContent(selectedButton);
  }

  return (
    <div className="background">
      <div className="container">
        <header>
          <h3>Begana Choi</h3>
          <p>front-end developer</p>
        </header>
        <div className="main">
          <Sidebar onSelect={handleChangeContent} />
          <Content content={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
