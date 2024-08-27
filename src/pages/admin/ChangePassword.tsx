import { Button, Row } from "antd"
import PhForm from "../../components/form/PhForm"
import PhInput from "../../components/form/PhInput"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { useChangePasswordMutation } from "../../redux/features/admin/userManagement.api"
import { TResponse } from "../../types"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"


const ChangePassword = () => {
    const navigate = useNavigate()
    const [changePassword] = useChangePasswordMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Changing")
        const res = await changePassword(data) as TResponse<any>
        console.log(res)
        if (res?.error) {
            toast.error(res?.error?.message, { id: toastId })
        }
        else {
            toast.success(res?.data?.message, { id: toastId })
            navigate("/login")
        }
    }
    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <PhForm onSubmit={onSubmit}>
                <PhInput type="text" name="oldPassword" label="Old Password" />
                <PhInput type="password" name="newPassword" label="New Password" />
                <Button htmlType="submit" style={{ marginTop: "20px" }}>Submit</Button>
            </PhForm>
        </Row>
    )
}

export default ChangePassword