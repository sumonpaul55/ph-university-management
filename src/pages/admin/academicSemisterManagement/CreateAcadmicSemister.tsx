import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../components/form/PhSelect"
import { nameOptions } from "../ASemister.constant";
import { monthOptions } from "../global.constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicValidationSchema } from "../../../schemaValidation/semisterSchemaValidation";


const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map(number => {
    return {
        value: String(currentYear + number),
        label: String(currentYear + number)
    }
})

const CreateAcadmicSemister = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const semisterName = nameOptions[Number(data?.name) - 1]?.label
        const semisterData = {
            name: semisterName,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        console.log(semisterData)
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