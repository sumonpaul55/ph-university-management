import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TSelectProps = {
    label: string;
    name: string;
    options?: { value: string; label: string }[];
    defalutValue?: string
}
const PhSelect = ({ label, name, options, defalutValue }: TSelectProps) => {
    return (
        <Controller name={name} render={({ field }) => {
            return <Form.Item label={label}>
                <Select
                    defaultValue={defalutValue}
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