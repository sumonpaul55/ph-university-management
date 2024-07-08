import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";
import Contact from "../pages/Contact";
import ProtectedRoute from "../components/layout/ProtectedRoute";

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
        children: routesGenerator(adminPaths)
    },
    // faculty
    {
        path: "/faculty",
        element: <App></App>,
        children: routesGenerator(facultyPaths)
    },
    // student
    {
        path: "/student",
        element: <App></App>,
        children: routesGenerator(studentPaths)
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/contact/:token",
        element: <Contact></Contact>
    },
    {
        path: "/sumon",
        element: <ProtectedRoute><Contact></Contact></ProtectedRoute>
    }

])

export default router