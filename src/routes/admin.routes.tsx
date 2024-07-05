
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudents";

export const adminPaths = [
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




// export const adminSidebar = adminPaths.reduce((acc: TSideBarItem[], items) => {
//     if (items.name && items.path) {
//         acc.push({
//             key: items.name,
//             label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>
//         })
//     }
//     if (items.children) {
//         acc.push({
//             key: items.name,
//             label: items.name,
//             children: items.children.map(child => (
//                 {
//                     key: child.name,
//                     label: <NavLink to={`/admin/${child.path}`}> {child.name}</NavLink>
//                 }
//             ))
//         })
//     }
//     return acc
// }, [])


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