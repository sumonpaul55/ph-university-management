import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetRegisteredSemisterQuery } from "../../../../redux/features/admin/CourseManagement.api";
import { TRegisterTableData } from "../../../../types/semisterType";




const columns: TableColumnsType = [
    {
        title: 'Name',
        key: "name",
        dataIndex: 'name',
        render: (name) => {
            return <p style={{ fontWeight: "bold" }}>{name}</p>
        }

    },
    {
        title: 'Status',
        key: "status",
        dataIndex: 'status',
        render: (item) => {
            return <Tag color="red">{item}</Tag>
        }
    },
    {
        title: 'Start Month',
        key: "startDate",
        dataIndex: 'startDate',
    },
    {
        title: 'End Month',
        key: "endMonth",
        dataIndex: 'endMonth',
    },
    {
        title: "Action",
        dataIndex: "x",
        render: () => {
            return <div>
                <Dropdown>
                    <Button>Hi</Button>
                </Dropdown>
            </div>
        },
        width: "1%"
    }
];



const RegisteredSemister = () => {

    const { data: registeredSemister, isFetching } = useGetRegisteredSemisterQuery([])

    const tableAsemisterData = registeredSemister?.data?.map(({ academicSemister, status, startDate }: TRegisterTableData) => {
        return {
            name: `${academicSemister?.name} - ${academicSemister?.year}`,
            status,
            startDate
        }
    })


    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableAsemisterData}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default RegisteredSemister