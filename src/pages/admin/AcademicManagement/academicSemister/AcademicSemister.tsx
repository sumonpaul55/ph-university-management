import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api"
import { TacademicSemisterData } from "../../../../types/Management.type";
import { useState } from "react";
import { TQueryParams } from "../../../../types";

export type TTableData = Pick<TacademicSemisterData,
    '_id' | 'name' | 'startMonth' | 'endMonth' | 'year'>
const columns: TableColumnsType<TTableData> = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: [
            {
                text: 'Autumn',
                value: 'Autumn',
            },
            {
                text: 'Summer',
                value: 'Summer',
            },
            {
                text: 'Fall',
                value: 'Fall',
            },

        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Year',
        dataIndex: 'year',
        // sorter: (a, b) => a.age - b.age,
        filters: [
            {
                text: "2024",
                value: "2024",
            },
            {
                text: "2025",
                value: "2025",
            },
            {
                text: "2026",
                value: "2026",
            },
            {
                text: "2027",
                value: "2027",
            },
        ]
    },
    {
        title: 'Start Month',
        dataIndex: 'startMonth',
    },
    {
        title: 'End Month',
        dataIndex: 'endMonth',
    },
];


const AcademicSemister = () => {
    const [queryParams, setQueryParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: academicsmster, isFetching } = useGetAllSemistersQuery(queryParams)

    const tableAsemisterData = academicsmster?.map(({ _id, name, year, startMonth, endMonth }) => {
        return {
            key: _id, _id, name, year, startMonth, endMonth
        }
    })


    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
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
            dataSource={tableAsemisterData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicSemister