import { Col, Row } from "antd"
import PhForm from "../../../../components/form/PhForm"
import PhInput from "../../../../components/form/PhInput"
import PhSelect from "../../../../components/form/PhSelect"
import { FieldValues } from "react-hook-form"


const CreateAcademicDepartment = () => {
    const onsubmit = (data: FieldValues) => {
        console.log(data)
    }
    return (
        <PhForm onSubmit={onsubmit}>
            <Row>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label="Department Name" name="name" type="text" />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhSelect label="Academic Faculty" name="academicFaculty" options={[]} />
                </Col>
            </Row>
        </PhForm>
    )
}

export default CreateAcademicDepartment