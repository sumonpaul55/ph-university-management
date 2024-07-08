import { Menu } from 'antd'
import { sideBarItemsGenertor } from '../../utils/sideBarItemsGenerator'
import { adminPaths } from '../../routes/admin.routes'
import Sider from 'antd/es/layout/Sider';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { userRole } from './layout.const';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/AuthSlice';


const Sidebar = () => {
    const user = useAppSelector(selectCurrentUser)
    let sideBaritems;
    switch (user?.role) {
        case userRole.ADMIN:
            sideBaritems = sideBarItemsGenertor(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sideBaritems = sideBarItemsGenertor(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sideBaritems = sideBarItemsGenertor(studentPaths, userRole.STUDENT);
            break;
        default:
            break;
    }

    return (
        <Sider
            breakpoint="xl"
            collapsedWidth="0"
            onBreakpoint={() => {
                // console.log(broken);
            }}
            onCollapse={() => {
                // console.log(collapsed, type);
            }}>
            <div className="demo-logo-vertical">
                <h1 style={{ fontSize: "20px", color: "white", fontWeight: "500", textAlign: "center", padding: '10px', borderBottom: "1px solid gray" }}>University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBaritems} />
        </Sider>
    )
}

export default Sidebar