import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Portfolio } from "./Components/Components.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      {/* <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route loader={githubInfo} path="github" element={<GitHub />} /> */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
