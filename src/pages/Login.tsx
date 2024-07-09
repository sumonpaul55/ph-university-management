
import { Button } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/VerifiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";


type Inputs = {
    id: string,
    password: string,
};

const Login = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            id: "A-0001",
            password: "4844838"
        }
    });

    const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
        console.log(data)
        // const toastId = toast.loading("Logging in")
        // try {
        //     const userInfo = {
        //         id: data.id,
        //         password: data.password
        //     }
        //     const res = await login(userInfo).unwrap()
        //     const user = verifyToken(res.data.accessToken) as TUser
        //     dispatch(setUser({ user, token: res.data.accessToken }))
        //     navigate(`/${user.role}/dashboard`)
        //     toast.success("You are logged in successfully", { id: toastId, duration: 2000 })
        // } catch (error: any) {
        //     toast.error("something went wrong", { id: toastId })
        // }
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <div className="">
            <PhForm onSubmit={onSubmit}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}

                    <PhInput type="text" name="id" label="User Id" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    {/* include validation with required or other standard HTML validation rules */}
                    <PhInput type="password" name="password" label="password" />
                    {/* errors will return when field validation fails  */}
                    {/* {errors.password && <p style={{ color: "red", marginTop: "5px" }}>This field is required</p>} */}
                </div>
                <Button htmlType="submit" style={{ marginTop: "20px" }}>Submit</Button>
            </PhForm>
        </div>
    )
}

export default Login