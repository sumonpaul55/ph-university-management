import PhForm from '../../../components/form/PhForm'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import PhInput from '../../../components/form/PhInput'
import { Button, Col, Divider, Row } from 'antd'
import PhSelect from '../../../components/form/PhSelect'
import { bloodGroups, genders } from '../../../lib/globalConstant'
import { ganereteOption } from '../../../utils/optionsGenerator'
import PhDatePicker from '../../../components/form/PhDatePicker'
import { useGetAllSemistersQuery } from '../../../redux/features/admin/academicManagement.api'
import { useAddStudentsMutation } from '../../../redux/features/admin/userManagement.api'

const CreateStudent = () => {
    const { data: semister, isLoading: semisterLoading } = useGetAllSemistersQuery(undefined);

    const [addStudent] = useAddStudentsMutation(undefined);


    const semisterData = semister?.map(item => {
        return { value: item?._id, label: `${item.name}-${item.year}` }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const formData = new FormData()

        formData.append("data", JSON.stringify(data));

        // console.log([...formData.entries()])
        console.log(Object.fromEntries(formData))
    }
    return (
        <PhForm onSubmit={onSubmit}>
            <Row gutter={10}>
                <Divider>Personal Info</Divider>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='First Name' name="name.firstName" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Middle Name' name="name.middleName" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Last Name' name="name.lastName" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhSelect label='Gender' name="gender" defalutValue='Select Gender' options={ganereteOption(genders)} />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhDatePicker label='Date of Birth' name="dateOfBirth" />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhSelect label='Blood' name="bloodGroup" defalutValue='blood Group' options={ganereteOption(bloodGroups)} />
                </Col>
            </Row>
            <Row gutter={10}>
                <Divider>Contact Info</Divider>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Email' name="email" type='email' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Contact Number' name="contactNumber" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='E. Contact' name="emergencyContactNo" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Present Address' name="presentAddress" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Permanent Address' name="permenentAdress" type='text' />
                </Col>
            </Row>
            <Row gutter={10}>
                <Divider>Gurdian</Divider>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Father Name' name="guardian.fatherName" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Father Occupation' name="guardian.fatherOccupation" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Father Contact' name="guardian.fatherContactNo" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Mother Name' name="guardian.motherName" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Mother Occupation' name="guardian.motherOccupation" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Mother"s Contact' name="guardian.motherContactNo" type='text' />
                </Col>
            </Row>
            <Row gutter={10}>
                <Divider>Local Gurdian</Divider>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Name' name="localGuardian.name" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Occupation' name="localGuardian.occupation" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Contact No' name="localGuardian.contactNo" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Address' name="localGuardian.address" type='text' />
                </Col>
            </Row>
            <Row gutter={10}>
                <Divider>Academic Info</Divider>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Profile Image' name="profileImage" type='text' />
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    {
                        <PhSelect label='Admission Semister' name="admissionSemister" disabled={semisterLoading} options={semisterData} />
                    }
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    {
                        <PhInput label='Academic Department' name="academicDepartment" type='text' />
                    }

                </Col>
            </Row>
            <Button htmlType='submit'>Submit</Button>
        </PhForm>
    )
}

export default CreateStudent