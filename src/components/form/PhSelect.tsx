import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TSelectProps = {
    label: string;
    name: string;
    options?: { value: string; label: string }[]
}
const PhSelect = ({ label, name, options }: TSelectProps) => {
    return (
        <Controller name={name} render={({ field }) => {
            return <Form.Item label={label}>
                <Select
                    defaultValue="Select Name"
                    style={{ width: "100%" }}
                    {...field}
                    options={options}
                    size='large'
                />
            </Form.Item>
        }} />
    )
}

export default PhSelect