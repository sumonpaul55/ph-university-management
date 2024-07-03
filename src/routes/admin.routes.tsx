import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudents";



type TRoute = {
    path: string;
    element: ReactNode
}
const adminPaths = [

    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            },
            {
                name: 'Create Member',
                path: 'create-member',
                element: <CreateStudent />,
            },
        ],
    },
];



const adminRoutes = adminPaths.reduce((acc: TRoute[], items): any => {
    if (items.path && items.element) {
        acc.push({
            path: items.path,
            element: items.element
        })
    }
    if (items.children) {
        items.children.forEach(child => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
}, [])

export default adminRoutes





// export const AdminPaths = [
//     {
//         index: true,
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: "dashboard",
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin></CreateAdmin>
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty></CreateFaculty>
//     }
// ]