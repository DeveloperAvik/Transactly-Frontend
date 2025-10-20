import App from "../App";
import About from "../pages/About";
// import Analytics from "../pages/Analytics";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "about",
                Component: About
            },
        ],
    }, 

    {
        Component: Login,
        path: "/login",
    },
    {
        Component: Register,
        path: "/register",
    },
    // {
    //     Component: AdminLyouts,
    //     path:"admin",
    //     children: [
    //         {
    //             path:"analytics",
    //             Component: Analytics
    //         }
    //     ]
    // }
]);