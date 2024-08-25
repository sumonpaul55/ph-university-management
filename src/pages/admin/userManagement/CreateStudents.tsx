import PhForm from '../../../components/form/PhForm'
import { Controller, FieldValues, SubmitHandler } from 'react-hook-form'
import PhInput from '../../../components/form/PhInput'
import { Button, Col, Divider, Form, Input, Row } from 'antd'
import PhSelect from '../../../components/form/PhSelect'
import { bloodGroups, genders } from '../../../lib/globalConstant'
import { ganereteOption } from '../../../utils/optionsGenerator'
import PhDatePicker from '../../../components/form/PhDatePicker'
import { useGetAcademicDepartmentQuery, useGetAllSemistersQuery } from '../../../redux/features/admin/academicManagement.api'
import { useAddStudentsMutation } from '../../../redux/features/admin/userManagement.api'
import { toast } from 'sonner'
import { TResponse } from '../../../types'

const CreateStudent = () => {
    const { data: semister, isLoading: semisterLoading } = useGetAllSemistersQuery(undefined);
    const { data: academicDepartment, } = useGetAcademicDepartmentQuery(undefined, { skip: semisterLoading })

    const [addStudents] = useAddStudentsMutation();

    const semisterData = semister?.map(item => {
        return { value: item?._id, label: `${item.name}-${item.year}` }
    });
    const academicDepartmentData = academicDepartment?.data?.map((item: { _id: string; name: string }) => {
        return { value: item?._id, label: `${item.name}` }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...")
        const formData = new FormData()
        const studenObj = {
            Password: "student1234",
            studentData: data
        }
        // console.log(studenObj)
        formData.append("data", JSON.stringify(studenObj));
        formData.append("file", data.image)
        // console.log([...formData.entries()])
        const res = await addStudents(formData) as TResponse<any>

        if (res.error) {
            toast.error(res?.error?.data?.message, {
                id: toastId
            })
        }
        if (res.data?.success) {
            toast.success(res.data.message, {
                id: toastId
            })
        }


    }




    // const studentDefaultvalue = {
    //     "name": {
    //         "firstName": "Paul",
    //         "middleName": "sumon",
    //         "lastName": "chandra"
    //     },
    //     "gender": "male",

    //     // "email": "sumpaul3@gmail.com",
    //     "contactNumber": "123-456-7890",
    //     "emergencyContactNo": "098-765-4321",
    //     "bloodGroup": "O+",
    //     "presentAddress": "123 Main St, Anytown, USA",
    //     "permenentAdress": "456 Elm St, Anytown, USA",
    //     "guardian": {
    //         "fatherName": "Richard Doe",
    //         "fatherOccupation": "Engineer",
    //         "fatherContactNo": "111-222-3333",
    //         "motherName": "Jane Doe",
    //         "motherOccupation": "Teacher",
    //         "motherContactNo": "444-555-6666"
    //     },
    //     "localGuardian": {
    //         "name": "Tom Smith",
    //         "occupation": "Doctor",
    //         "contactNo": "777-888-9999",
    //         "address": "789 Oak St, Anytown, USA"
    //     },
    //     "profileImage": "",

    //     "isDeleted": false
    // }
    return (
        <PhForm onSubmit={onSubmit} >
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
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <Controller name="image" render={({ field: { onChange, value, ...field } }) => {
                        return <Form.Item label="Picture">
                            <Input onChange={(e) => onChange(e.target.files?.[0])} type="file" size='large' value={value?.filename} {...field} />
                        </Form.Item>
                    }} />
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
                {/* <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    <PhInput label='Profile Image' name="profileImage" type='text' />
                </Col> */}
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    {
                        <PhSelect label='Admission Semister' name="admissionSemister" disabled={semisterLoading} options={semisterData} />
                    }
                </Col>
                <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }}>
                    {

                        <PhSelect label='Academic Department' name="academicDepartment" options={academicDepartmentData} />
                    }

                </Col>
            </Row>
            <Button htmlType='submit' style={{ margin: "20px 0" }}>Submit</Button>
        </PhForm>
    )
}

export default CreateStudent