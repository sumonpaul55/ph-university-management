import { Form, Input } from "antd"
import { Controller } from "react-hook-form"


const PhInput = ({ type, name, label, placeholder }: { type?: string; name: string; label?: string; placeholder?: string }) => {

    return (
        <div style={{ marginBottom: "10px" }}>
            {/* <h3 style={{ marginBottom: "5px" }}> {label ? label : null}</h3> */}
            <Controller name={name} render={({ field, fieldState: { error } }) => <Form.Item label={label}>
                <Input {...field} type={type} id={name} size='large' placeholder={placeholder} />
                {
                    error && <p style={{ color: "red", marginTop: "4px" }}>{error?.message}</p>
                }
            </Form.Item>}
            />
        </div>
    )
}

export default PhInput