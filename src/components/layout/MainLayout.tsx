import { Button, Layout } from 'antd';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/AuthSlice';
const { Header, Content } = Layout;

const MainLayout = () => {

    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar></Sidebar>
            <Layout>
                <Header style={{ paddingLeft: "20px", background: "darkblue", height: "3rem", display: "flex", alignItems: "center" }} >
                    <Button onClick={handleLogout} >Logout</Button>
                    <h1 style={{ fontWeight: "bold", color: "white", fontSize: "20px", textAlign: 'center', flex: "1" }}>University Management</h1>
                </Header>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            minHeight: 360,
                        }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout