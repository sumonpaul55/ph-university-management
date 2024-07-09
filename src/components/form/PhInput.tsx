import { Input } from "antd"
import { Controller } from "react-hook-form"


const PhInput = ({ type, name, label }: { type: string; name: string; label?: string }) => {

    return (
        <div style={{ marginBottom: "10px" }}>
            <h2 style={{ marginBottom: "5px" }}> {label ? label : null}</h2>
            <Controller name={name} render={({ field }) => <Input {...field} type={type} id={name} />}
            />
        </div>
    )
}

export default PhInput