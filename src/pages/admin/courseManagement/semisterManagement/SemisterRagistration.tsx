import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../../components/form/PhSelect"
import { monthOptions, TResponse, } from "../../../../types/global.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicValidationSchema } from "../../../../schemaValidation/semisterSchemaValidation";
import { toast } from "sonner";
import { nameOptions, statuseOptions } from "../../AcademicManagement/ASemister.constant";
import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api";


const currentYear = new Date().getFullYear();


const SemisterRagistration = () => {
    const { data: semisterData, isFetching } = useGetAllSemistersQuery([])
    const academicSemisterNameData = semisterData?.map((item) => {

        return {
            label: `${item?.name} - ${item?.year}`,
            value: item?._id
        }
    })
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
        // try {
        //     const res = await createAcademicSemister(semisterData) as TResponse<TacademicSemisterData>

        //     if (res?.error) {
        //         toast.error(res?.error?.data?.message, { id: toastId })
        //     } else toast.success(res?.data?.message, { id: toastId })
        // } catch (err: any) {
        //     toast.error("Something went wrong", { id: toastId })
        // }
    }

    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <PhForm onSubmit={onSubmit} resolver={zodResolver(academicValidationSchema)}>
                        <PhSelect disabled={isFetching} name="academicSemister" label="Academic Semister" options={academicSemisterNameData} defalutValue="Select A. Semister" />
                        <PhSelect name="status" label="Status" options={statuseOptions} defalutValue="Select Status" />
                        <PhSelect name="startMonth" label="Start Month" options={monthOptions} defalutValue="Select start Month" />
                        <PhSelect name="endMonth" label="Start Month" options={monthOptions} defalutValue="Select End Month" />
                        <Button style={{ border: "1px solid gray", width: "100%", marginTop: '20px' }} htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default SemisterRagistration