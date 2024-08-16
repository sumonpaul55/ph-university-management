
import { Button, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/VerifiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";


// type Inputs = {
//     id: string,
//     password: string,
// };

const Login = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const dispatch = useDispatch()

    const defaultValues = {
        id: "A-0001",
        password: "4844838"
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
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
            toast.error(error?.data.message, { id: toastId })
        }
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PhInput type="text" name="id" label="User Id" />
                <PhInput type="password" name="password" label="password" />
                <Button htmlType="submit" style={{ marginTop: "20px" }}>Submit</Button>
            </PhForm>
        </Row>
    )
}

export default Login