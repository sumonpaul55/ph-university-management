import { Button, Col, } from "antd"
import PhForm from "../../../../components/form/PhForm"
import PhInput from "../../../../components/form/PhInput"
import PhSelect from "../../../../components/form/PhSelect"
import { FieldValues } from "react-hook-form"
import { useCreateAcademicDepartmentMutation, useGetAcademicFacultyQuery } from "../../../../redux/features/admin/academicManagement.api"
import { toast } from "sonner"
import { TResponse } from "../../../../types"


const CreateAcademicDepartment = () => {
    const { data, isFetching } = useGetAcademicFacultyQuery(undefined)
    const [createDepartment] = useCreateAcademicDepartmentMutation()
    const facultyOptions = data?.data.map((items: { name: string; _id: string }) => {
        return {
            value: items._id,
            label: items.name
        }
    })
    const onsubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Creating...")
        const res = await createDepartment(data) as TResponse<any>
        try {
            if (res?.data?.success) {
                toast.success(res?.data?.message, { id: toastId })
            }
            if (res.error) {
                toast.error(res?.error?.data?.message, { id: toastId })
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong", { id: toastId })
        }
    }
    return (
        <PhForm onSubmit={onsubmit}>
            <Col span={12} style={{ margin: "auto" }}>
                <Col>
                    <PhInput label="Department Name" name="name" type="text" placeholder="Academic Department name" />
                </Col>
                <Col>
                    <PhSelect disabled={isFetching} label="Academic Faculty" name="academicFaculty" options={facultyOptions} defalutValue="Select Faculty" />
                </Col>
                <Button htmlType="submit"> Submit</Button>
            </Col>

        </PhForm>
    )
}

export default CreateAcademicDepartment