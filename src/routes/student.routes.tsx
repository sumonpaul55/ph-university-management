import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse></OfferedCourse>
    }
]