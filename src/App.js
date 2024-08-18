import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
