import { createBrowserRouter } from "react-router-dom";
import Profile from "./profile";
import Contact from "./contact";
import Home from "./home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

export default router