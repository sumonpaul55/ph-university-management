import { Button, Flex, Pagination, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllStudentQuery } from "../../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

type TTableStudentData = {
    _id: string;
    fullName: string;
    id: string;
    email: string;
    contactNumber?: string
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
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Contact',
        dataIndex: 'contactNumber',
    },
    {
        title: 'Roll',
        dataIndex: 'id',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Action",
        dataIndex: "_id",
        render: (id) => {
            return <Flex gap={10}>
                <Link to={`${id}`}> <Button>Detial</Button></Link>
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
    }, { name: "limit", value: 4 }, {
        name: "sort", value: "id"
    }, ...queryParams])
    const students = studentData?.data;
    const metaData = studentData?.meta

    const tableStudent = students?.map(({ _id, fullName, id, email, contactNumber }: TTableStudentData) => {
        return {
            key: _id, _id, fullName, id, email, contactNumber
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