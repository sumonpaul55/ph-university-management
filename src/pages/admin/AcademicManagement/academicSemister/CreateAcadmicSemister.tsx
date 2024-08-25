import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../../components/form/PhSelect"
import { nameOptions } from "../ASemister.constant";
import { monthOptions, TResponse, } from "../../../../types/global.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicValidationSchema } from "../../../../schemaValidation/semisterSchemaValidation";
import { useCreateAcademicSemisterMutation } from "../../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TacademicSemisterData } from "../../../../types/Management.type";


const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map(number => {
    return {
        value: String(currentYear + number),
        label: String(currentYear + number)
    }
})

const CreateAcadmicSemister = () => {
    const [createAcademicSemister] = useCreateAcademicSemisterMutation()


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...")
        const semisterName = nameOptions[Number(data?.name) - 1]?.label
        const semisterData = {
            name: semisterName,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        try {
            const res = await createAcademicSemister(semisterData) as TResponse<TacademicSemisterData>

            if (res?.error) {
                toast.error(res?.error?.data?.message, { id: toastId })
            } else toast.success(res?.data?.message, { id: toastId })
        } catch (err: any) {
            toast.error("Something went wrong", { id: toastId })
        }
    }

    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <PhForm onSubmit={onSubmit} resolver={zodResolver(academicValidationSchema)}>
                        <PhSelect name="name" label="Name" options={nameOptions} defalutValue="Select Name" />
                        <PhSelect name="year" label="Year" options={yearOptions} defalutValue="Select Year" />
                        <PhSelect name="startMonth" label="Start Month" options={monthOptions} defalutValue="Select start Month" />
                        <PhSelect name="endMonth" label="Start Month" options={monthOptions} defalutValue="Select End Month" />
                        <Button style={{ border: "1px solid gray", width: "100%", marginTop: '20px' }} htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default CreateAcadmicSemister