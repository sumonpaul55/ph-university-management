import { useFormContext } from "react-hook-form"


const PhInput = ({ type, name, label }) => {
    const { register } = useFormContext()
    return (
        <>
            <h2> {label ? label : null}</h2>
            < input type={type} id={name}{...register(name)} />
        </>
    )
}

export default PhInput