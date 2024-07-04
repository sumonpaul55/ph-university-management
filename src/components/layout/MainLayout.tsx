import { Layout, Menu } from 'antd';

import { Outlet } from 'react-router-dom';
import { adminSidebar } from '../../routes/admin.routes';

const { Header, Content, Footer, Sider } = Layout;

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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebar} />
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