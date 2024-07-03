import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import adminRoutes from "./admin.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "about",
                element: <About></About>
            },

        ],

    },
    // admin related route
    {
        path: "/admin",
        element: <App></App>,
        children: adminRoutes
    },
    // faculty
    {
        path: "/admin",
        element: <App></App>,
        children: adminRoutes
    },
    // student
    {
        path: "/admin",
        element: <App></App>,
        children: adminRoutes
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])

export default router