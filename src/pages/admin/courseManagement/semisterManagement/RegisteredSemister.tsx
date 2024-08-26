import { Button, Dropdown, MenuItemProps, MenuProps, Table, TableColumnsType, Tag } from "antd";
import { useGetRegisteredSemisterQuery } from "../../../../redux/features/admin/CourseManagement.api";
import { TRegisterTableData } from "../../../../types/semisterType";
import moment from "moment";

const items: MenuProps["items"] = [
    {
        key: "UPCOMING",
        label: 'UPCOMING'
    },
    {
        key: "ONGOING",
        label: 'ONGOING'
    },
    {
        key: "ENDED",
        label: 'ENDED'
    },
]

const handleStatusClick: MenuItemProps["onClick"] = (data) => {
    console.log(data)
}

const menuProps = {
    items,
    onClick: handleStatusClick
}

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
        dataIndex: 'endDate',
    },
    {
        title: "Action",
        dataIndex: "x",
        render: () => {
            return <div>
                <Dropdown menu={menuProps}>
                    <Button>Update</Button>
                </Dropdown>
            </div>
        },
        width: "1%"
    }
];



const RegisteredSemister = () => {

    const { data: registeredSemister, isFetching } = useGetRegisteredSemisterQuery([])

    const tableAsemisterData = registeredSemister?.data?.map(({ academicSemister, status, startDate, endDate }: TRegisterTableData) => {
        return {
            key: academicSemister._id,
            name: `${academicSemister?.name} - ${academicSemister?.year}`,
            status,
            startDate: moment(new Date(startDate)).format("MMMM"),
            endDate: moment(new Date(endDate)).format("MMMM")
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