import { Form, Input } from "antd"
import { Controller } from "react-hook-form"


const PhInput = ({ type, name, label }: { type: string; name: string; label?: string }) => {

    return (
        <div style={{ marginBottom: "10px" }}>
            {/* <h3 style={{ marginBottom: "5px" }}> {label ? label : null}</h3> */}
            <Controller name={name} render={({ field }) => <Form.Item label={label}>
                <Input {...field} type={type} id={name} />
            </Form.Item>}
            />
        </div>
    )
}

export default PhInput