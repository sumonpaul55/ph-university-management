import { useParams } from "react-router-dom"


const StudentDetails = () => {
    const { studentId } = useParams()
    console.log(studentId)
    return (
        <div>StudentDetails</div>
    )
}

export default StudentDetails