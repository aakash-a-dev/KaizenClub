import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team.jsx";
import Members from "./pages/Members/Members.jsx";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/KaizenClub" element={<Home />} />
      <Route path="/KaizenClub/Team" element={<Members />} />
      <Route path="/KaizenClub/events" element={<Events />} />
      <Route path="/KaizenClub/:slug" element={<SlugPage />} /> {/*It is for Dynamic route */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
