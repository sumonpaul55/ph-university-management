import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../components/form/PhSelect"

const nameOptions = [
    {
        value: "01", label: "Autumn"
    },
    {
        value: "02", label: "Summer"
    },
    {
        value: "03", label: "Fall"
    }
]
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map(number => {
    return {
        value: String(currentYear + number),
        label: String(currentYear + number)
    }
})
console.log(currentYear)

const CreateAcadmicSemister = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const semisterName = nameOptions[Number(data?.name) - 1]?.label
        const semisterData = {
            name: semisterName,
            code: data.name,
            year: data.year
        }
        console.log(semisterData)
    }

    return (
        <div style={{ height: "200vh" }}>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <PhForm onSubmit={onSubmit}>
                        <PhSelect name="name" label="Name" options={nameOptions} defalutValue="Select Name" />
                        <PhSelect name="year" label="Year" options={yearOptions} defalutValue="Select Year" />
                        <Button htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default CreateAcadmicSemister