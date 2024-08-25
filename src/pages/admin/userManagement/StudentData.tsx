import { Button, Flex, Pagination, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";

type TTableStudentData = {
    _id: string;
    fullName: string;
    id: string;
}

const columns: TableColumnsType<TTableStudentData> = [
    {
        title: 'Name',
        dataIndex: 'fullName',
        showSorterTooltip: { target: 'full-header' },
        render: (name) => {
            return <p style={{ fontWeight: "bold" }}>{name}</p>
        }

    },
    {
        title: 'Roll',
        dataIndex: 'id',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Action",
        dataIndex: "x",
        render: () => {
            return <Flex gap={10}>
                <Button>Detial</Button>
                <Button>Edit</Button>
                <Button>Block</Button>
            </Flex>
        },
        width: "1%"
    }
];



const StudentData = () => {
    const [queryParams, setQueryParams] = useState([])
    const [page, setPage] = useState(1)
    const { data: studentData, isFetching } = useGetAllStudentQuery([{
        name: "page", value: page
    }, { name: "limit", value: 4 }, ...queryParams])
    const students = studentData?.data;
    const metaData = studentData?.meta

    const tableStudent = students?.map(({ _id, fullName, id }: TTableStudentData) => {
        return {
            key: _id, _id, fullName, id
        }
    })



    return (
        <>
            <Table
                loading={isFetching}
                columns={columns}
                dataSource={tableStudent}
                pagination={false}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
            <div style={{ marginTop: "15px" }}>
                <Pagination
                    size="small"
                    total={metaData?.total}
                    pageSize={metaData?.limit}
                    showSizeChanger
                    onChange={(value) => setPage(value)}
                />
            </div>
        </>
    )
}

export default StudentData