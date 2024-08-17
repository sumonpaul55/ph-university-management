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
        <Controller name={name} render={({ field, fieldState: { error } }) => {
            return <Form.Item label={label}>
                <Select
                    defaultValue={defalutValue}
                    style={{ width: "100%" }}
                    {...field}
                    options={options}
                    size='large'
                />
                {
                    error && <p style={{ color: "red", marginTop: "6px" }}>{error?.message}</p>
                }
            </Form.Item>
        }} />
    )
}

export default PhSelect