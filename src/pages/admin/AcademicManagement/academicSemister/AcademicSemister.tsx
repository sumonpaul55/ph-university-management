import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api"
import { TacademicSemisterData } from "../../../../types/academicSemister.type";
import { useState } from "react";

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
        // defaultSortOrder: 'descend',
        // sorter: (a, b) => a.age - b.age,
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
    const [queryParams, setQueryParams] = useState<string | unknown>([])

    const { data: academicsmster } = useGetAllSemistersQuery(queryParams)
    const tableAsemisterData = academicsmster?.map(({ _id, name, year, startMonth, endMonth }) => {
        return {
            key: _id, _id, name, year, startMonth, endMonth
        }
    })


    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log(extra, filters);
        if (extra.action === "filter") {
            const querynameParams: { name: string; value: any }[] = []
            filters?.name!.map(item => querynameParams.push({ name: "name", value: item }))
            setQueryParams(querynameParams)
        }
    };
    return (
        <Table
            columns={columns}
            dataSource={tableAsemisterData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicSemister