import { Col, Table, TableColumnsType } from "antd"
import { useGetAcademicFacultyQuery } from "../../../../redux/features/admin/academicManagement.api"
import Loading from "../../../commonPages/Loading"


type TFacultyData = {
    _id: string;
    name: string
}
const AcademicFaculty = () => {
    const { data, isFetching, isLoading } = useGetAcademicFacultyQuery(undefined)

    if (isLoading) {
        return <Loading />
    }
    const TableData = data?.data.map((items: TFacultyData, idx: number) => {
        return { name: items.name, key: idx + 1 }
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

export default AcademicFaculty