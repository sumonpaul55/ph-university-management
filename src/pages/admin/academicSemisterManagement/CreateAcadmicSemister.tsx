import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../components/form/PhForm"
import PhInput from "../../../components/form/PhInput"
import { Button, Col, Flex } from "antd"
import PhSelect from "../../../components/form/PhSelect"



const CreateAcadmicSemister = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <PhForm onSubmit={onSubmit}>
                        <PhSelect label="Name" />
                        <PhInput type="text" name="name" label="Name" />
                        <PhInput type="text" name="name" label="Name" />
                        <PhInput type="text" name="name" label="Name" />
                        <Button htmlType="submit">Submit</Button>
                    </PhForm>
                </Col>
            </Flex>
        </div>
    )
}

export default CreateAcadmicSemister