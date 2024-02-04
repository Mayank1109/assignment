import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoardPage from "./Pages/dashboardPage";
const router = createBrowserRouter([{ path: "/", element: <DashBoardPage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
