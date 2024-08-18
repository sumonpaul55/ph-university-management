import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemistersQuery } from "../../../../redux/features/admin/academicManagement.api"

interface DataType {
    key: React.Key;
    name: string;
    year: number;
    startMonth: string;
    endMonth: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
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

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const AcademicSemister = () => {
    const { data: academicsmster } = useGetAllSemistersQuery(undefined)



    console.log(data)
    return (
        <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicSemister