import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import InfoPage from "./pages/Info.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/info", element: <InfoPage /> },
        { path: "/Projects", element: <ProjectsPage /> },
        { path: "/Contact", element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
