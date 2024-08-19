
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
    // Custom loading icon
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

    return (
        <Flex justify='center' style={{ marginTop: "20px" }}>
            <div className="loading-container">
                <Spin indicator={antIcon} />
            </div>
        </Flex>
    );
};

export default Loading;
