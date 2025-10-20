import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import FeaturesPage from "@/pages/FeaturesPage";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
// import FAQ from "@/pages/Landing/FAQ";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    Component: App, 
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "features",
        Component: FeaturesPage,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "contact",
        Component: Contact,
      },
    //   {
    //     path: "faq",
    //     Component: FAQ,
    //   },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
]);
