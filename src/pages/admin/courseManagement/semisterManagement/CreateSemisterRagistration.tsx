import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../../components/form/PhSelect"
import { TResponse, } from "../../../../types/global.type";
import { toast } from "sonner";
import { statuseOptions } from "../../AcademicManagement/ASemister.constant";
import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api";
import PhDatePicker from "../../../../components/form/PhDatePicker";
import PhInput from "../../../../components/form/PhInput";
import { useAddRegisterSemisterMutation } from "../../../../redux/features/admin/CourseManagement.api";
import { CreateSemisteRegistration } from "../../../../types";




const SemisterRagistration = () => {
    const [AddRegisterSemister] = useAddRegisterSemisterMutation()
    const { data: semisterData, isFetching } = useGetAllSemistersQuery([])
    const academicSemisterNameData = semisterData?.map((item) => {
        return {
            label: `${item?.name} - ${item?.year}`,
            value: item?._id
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...")

        const semisterRegisData = {
            ...data,
            minCreadit: Number(data.minCreadit),
            maxCreadit: Number(data.maxCreadit)
        }
        console.log(semisterRegisData)
        try {
            const res = await AddRegisterSemister(semisterRegisData) as TResponse<CreateSemisteRegistration>
            console.log(res)
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
                    <PhForm onSubmit={onSubmit}>
                        <PhSelect disabled={isFetching} name="academicSemister" label="Academic Semister" options={academicSemisterNameData} defalutValue="Select A. Semister" />
                        <PhSelect name="status" label="Status" options={statuseOptions} defalutValue="Select Status" />
                        <PhDatePicker label="Start Date" name="startDate" />
                        <PhDatePicker label="Start Date" name="endDate" />
                        <PhInput name="minCreadit" label="Min Creadit" placeholder="Min Credit" />
                        <PhInput name="maxCreadit" label="Max Creadit" placeholder="Max Credit" />

                        <Button style={{ border: "1px solid gray", width: "100%", marginTop: '20px' }} htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default SemisterRagistration