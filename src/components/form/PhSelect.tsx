import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

const PhSelect = ({ label, name }) => {

    return (
        <Controller name={name} render={({ field: { onChange } }) => {
            return <Form.Item label={label}>
                <Select
                    defaultValue="lucy"
                    style={{ width: "100%" }}
                    onChange={onChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                    ]}
                />
            </Form.Item>
        }} />
    )
}

export default PhSelect