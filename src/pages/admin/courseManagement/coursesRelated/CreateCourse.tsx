import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../../components/form/PhSelect"
import { toast } from "sonner";
import PhInput from "../../../../components/form/PhInput";




const CreateCourse = () => {
    // const { data: semisterData, isFetching } = useGetAllSemistersQuery([])
    // const preRequisitCourse = semisterData?.map((item) => {
    //     return {
    //         label: `${item?.name} - ${item?.year}`,
    //         value: item?._id
    //     }
    // })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...")

        // const semisterRegisData = {
        //     ...data,
        //     minCreadit: Number(data.minCreadit),
        //     maxCreadit: Number(data.maxCreadit)
        // }
        console.log(data)
        // try {
        //     const res = await AddRegisterSemister(semisterRegisData) as TResponse<CreateSemisteRegistration>
        //     console.log(res)
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
                    <PhForm onSubmit={onSubmit}>
                        <PhInput name="title" label="Course Title" placeholder="Course Title" />
                        <PhInput name="Prefix" label="Prifix" placeholder="Prefix" />
                        <PhInput name="code" label="Code" placeholder="Code" />
                        <PhInput name="credits" label="Credit" placeholder="Credit" />
                        <PhSelect name="preRequisitsCourses" label="Pre RequisitsCourses" placeholder="Select Course" options={[
                            { label: "Courses1", value: "667155c5b6459edd9b3f0440" },
                            { label: "Courses2", value: "667155c5b6459edd9b3f0441" }
                        ]} mode="multiple" />

                        <Button style={{ border: "1px solid gray", width: "100%", marginTop: '20px' }} htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default CreateCourse