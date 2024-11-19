import { Outlet } from "react-router-dom";

import ThreeParticles from "../components/ThreeParticles.jsx";
import MainNavigation from "../components/MainNavitation.jsx";

export default function RootLayout() {
  return (
    <>
      <ThreeParticles />
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1, // Place this above the background
          color: "white",
          paddingTop: "25vh",
        }}
      >
        <header>
          <h3>Begana Choi</h3>
          <p>front-end developer</p>
        </header>
        <div className="main">
          <MainNavigation />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
