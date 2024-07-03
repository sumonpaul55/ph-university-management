import { Layout, Menu } from 'antd';

import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: "Dashboard",
        label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
    },
    {
        key: "User Management",
        label: "User Management",
        children: [
            {
                key: "create Admin",
                label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
            },
            {
                key: "create faculty",
                label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
            },
            {
                key: "create student",
                label: <NavLink to="/admin/create-student">Create student</NavLink>
            }
        ]
    }
];
const MainLayout = () => {

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    // console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    // console.log(collapsed, type);
                }}>
                <div className="demo-logo-vertical">
                    <h1 style={{ fontSize: "20px", color: "white", fontWeight: "500", textAlign: "center", padding: '10px', borderBottom: "1px solid gray" }}>University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ paddingLeft: "20px", background: "darkblue", height: "3rem", display: "flex", alignItems: "center" }} >
                    <h1 style={{ fontWeight: "bold", color: "white", fontSize: "20px", textAlign: 'center', flex: "1" }}>University Management</h1>
                </Header>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    University Mangement ©{new Date().getFullYear()} Created Sumon Paul
                </Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayout