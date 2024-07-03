import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudents from "../pages/admin/CreateStudents";
import About from "../pages/About";

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
        children: [
            {
                index: true,
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "dashboard",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "create-student",
                element: <CreateStudents></CreateStudents>
            }
        ],
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