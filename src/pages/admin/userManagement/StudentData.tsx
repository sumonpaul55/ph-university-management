import { Button, Flex, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams, TStudentData } from "../../../types";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TTableData } from "../AcademicManagement/academicSemister/AcademicSemister";

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
    const [queryParams, setQueryParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: studentData, isFetching } = useGetAllStudentQuery(queryParams)
    const students = studentData?.data

    const tableStudent = students?.map(({ _id, fullName, id }: TTableStudentData) => {
        return {
            key: _id, _id, fullName, id
        }
    })


    const onChange: TableProps<TTableStudentData>['onChange'] = (pagination, filters, sorter, extra) => {
        const querynameParams: TQueryParams[] = []
        if (extra.action === "filter") {
            filters.name?.forEach(item => querynameParams.push({ name: "name", value: item }))
            filters.year?.forEach(item => querynameParams.push({ name: "year", value: item }))
        }

        setQueryParams(querynameParams)
    };
    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableStudent}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default StudentData