
import AcademicSemister from "../pages/admin/AcademicManagement/academicSemister/AcademicSemister";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudents";
import CreateAcadmicSemister from "../pages/admin/AcademicManagement/academicSemister/CreateAcadmicSemister";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/academicFaculty/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/AcademicManagement/academicFaculty/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/academicDepartment/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/AcademicManagement/academicDepartment/AcademicDepartment";
import StudentData from "../pages/admin/userManagement/StudentData";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    }, {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semister",
                path: "create-academic-semister",
                element: <CreateAcadmicSemister />
            },
            {
                name: "Academic Semister",
                path: "academic-semister",
                element: <AcademicSemister />
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: < CreateAcademicFaculty />
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty />
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: < CreateAcademicDepartment />
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment />
            }
        ]
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
                name: 'Student Data',
                path: 'student-data',
                element: <StudentData />,
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