import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import MainNavigation from "./components/MainNavitation.jsx";
import Content from "./components/Contents/Content.jsx";
import ThreeParticles from "./components/ThreeParticles.jsx";

function App() {
  const [content, setContent] = useState("home");

  function handleChangeContent(selectedButton) {
    setContent(selectedButton);
  }

  const router = createBrowserRouter([
    { path: "/", element: <MainNavigation /> },
  ]);

  // <>
  //     <ThreeParticles />
  //     <div
  //       className="container"
  //       style={{
  //         position: "relative",
  //         zIndex: 1, // Place this above the background
  //         color: "white",
  //         paddingTop: "25vh",
  //       }}
  //     >
  //       <header>
  //         <h3>Begana Choi</h3>
  //         <p>front-end developer</p>
  //       </header>
  //       <div className="main">
  //         <Sidebar onSelect={handleChangeContent} />
  //         <Content content={content} />
  //       </div>
  //     </div>
  //   </>

  return <RouterProvider router={router} />;
}

export default App;
