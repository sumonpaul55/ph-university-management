
import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/VerifiyToken";


type Inputs = {
    id: string,
    password: string,
};

const Login = () => {
    const [login, { data, isLoading, error }] = useLoginMutation()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            id: "A-0001",
            password: "4844838"
        }
    });
    const onSubmit: SubmitHandler<Inputs> = async data => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        const user = verifyToken(res.data.accessToken)
        dispatch(setUser({ user, token: res.data.accessToken }))
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