import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/home";
import { Register } from "./pages/register";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/home',
    element: <Home />
  }, {
    path: '/register',
    element: <Register />
  }
]);
