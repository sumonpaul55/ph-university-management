import { Col, Table, TableColumnsType } from "antd"
import { useGetAcademicDepartmentQuery, } from "../../../../redux/features/admin/academicManagement.api"
import Loading from "../../../commonPages/Loading"


type TFacultyData = {
    _id: string;
    name: string,
    academicFaculty?: { name: string, _id: string };
}

const AcademicDepartment = () => {
    const { data, isFetching, isLoading } = useGetAcademicDepartmentQuery(undefined)

    if (isLoading) {
        return <Loading />
    }
    const TableData = data?.data?.map((items: TFacultyData, idx: number) => {
        return {
            name: items.name, key: idx + 1, faculty: items?.academicFaculty?.name
        }
    })
    const columns: TableColumnsType<TFacultyData> = [
        {
            title: 'No',
            dataIndex: 'key',
            render: (key) => <p style={{ fontWeight: "bold" }}>{key}</p>
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Faculty',
            dataIndex: 'faculty',
        },

    ];
    return (
        <Col span={24}>
            <Table
                loading={isFetching}
                columns={columns}
                dataSource={TableData}
                // onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </Col>
    )
}

export default AcademicDepartment