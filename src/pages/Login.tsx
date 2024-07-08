
import { Button } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/VerifiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


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
        const toastId = toast.loading("Logging in")
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            }
            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser
            dispatch(setUser({ user, token: res.data.accessToken }))
            navigate(`/${user.role}/dashboard`)
            toast.success("You are logged in successfully", { id: toastId, duration: 2000 })
        } catch (error: any) {
            toast.error("something went wrong", { id: toastId })
        }
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "500px", margin: "auto", marginTop: "50px" }}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder="Enter Email" {...register("id", { required: true })} />
                    {errors.id && <p style={{ color: "red", marginTop: "5px" }}>email field is required</p>}
                </div>
                <div style={{ marginTop: "20px" }}>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <p style={{ color: "red", marginTop: "5px" }}>This field is required</p>}
                </div>

                <Button htmlType="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Login