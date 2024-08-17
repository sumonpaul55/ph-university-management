import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api"


const AcademicSemister = () => {
    const { data } = useGetAllSemistersQuery(undefined)
    console.log(data)
    return (
        <div>Academic Semister</div>
    )
}

export default AcademicSemister