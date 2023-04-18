import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/routes/Navbar";
import { Home } from "./components/routes/Home";
import { Contact } from "./components/routes/Contact";
import { Info } from "./components/routes/Info";
import { ChatGPT } from "./components/routes/Chatbox";
import { Quiz } from "./components/routes/Quiz"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "Navbar",
    element: <Navbar />,
  },

  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Info",
    element: <Info />,
  },
  {
    path: "Chat",
    element: <ChatGPT />,
  },
  {
    path: "Quiz",
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
