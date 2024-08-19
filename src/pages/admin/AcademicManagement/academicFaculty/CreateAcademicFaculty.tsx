import { FieldValues } from "react-hook-form"
import { useCreateAcademicFacultyMutation } from "../../../../redux/features/admin/academicManagement.api"
import PhForm from "../../../../components/form/PhForm"
import { Button, Col, Flex, } from "antd"
import PhInput from "../../../../components/form/PhInput"
import { toast } from "sonner"
import { TResponse } from "../../../../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicFacultyValidationSchema } from "../../../../schemaValidation/semisterSchemaValidation"


const CreateAcademicFaculty = () => {
    const [createAcademicFaculty] = useCreateAcademicFacultyMutation()
    const onsubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Creating...")
        const res = await createAcademicFaculty({ name: data.name }) as TResponse<any>
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
        <PhForm onSubmit={onsubmit} resolver={zodResolver(academicFacultyValidationSchema)}>
            <Flex justify="center">
                <Col span={24} md={{ span: 12 }}>
                    <PhInput label="Academic Faculty Name" name="name" type="text" />
                    <Button htmlType="submit">Submit</Button>
                </Col>

            </Flex>
        </PhForm>
    )
}

export default CreateAcademicFaculty