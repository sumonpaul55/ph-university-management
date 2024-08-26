import { Button, Dropdown, MenuItemProps, MenuProps, Table, TableColumnsType, Tag } from "antd";
import { useGetRegisteredSemisterQuery, useUpdateStatuseMutation } from "../../../../redux/features/admin/CourseManagement.api";
import { TRegisterTableData } from "../../../../types/semisterType";
import moment from "moment";
import { useState } from "react";
import { toast } from "sonner";
import { TResponse } from "../../../../types";

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




const RegisteredSemister = () => {
    const { data: registeredSemister, isFetching } = useGetRegisteredSemisterQuery(undefined)
    const [updateStatus] = useUpdateStatuseMutation()
    const [academicSemisterId, setAcademicSemisterId] = useState<string | undefined>()

    const handleStatusTargetId = (id: string) => {
        setAcademicSemisterId(id)
    }

    const handleStatusUpdate: MenuItemProps["onClick"] = async (data) => {
        const toastId = toast.loading("Updating...")
        // console.log("id", academicSemisterId, data.key)
        const updateStatusData = {
            id: academicSemisterId,
            body: { status: data.key }
        }
        const res = await updateStatus(updateStatusData) as TResponse<any>
        if (res?.error) {
            toast.error(res?.error?.data?.message, { id: toastId })
        }
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId })
        }
    }

    const menuProps = {
        items,
        onClick: handleStatusUpdate
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
                let color = "red"
                if (item === "UPCOMING") {
                    color = "blue"
                }
                if (item === "ONGOING") {
                    color = "green"
                }

                return <Tag color={color}>{item}</Tag>
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
            dataIndex: "_id",
            render: (item) => {
                return <div>
                    <Dropdown menu={menuProps} trigger={["click"]}>
                        <Button onClick={() => handleStatusTargetId(item)}>Update</Button>
                    </Dropdown>
                </div>
            },
            width: "1%"
        }
    ];

    const tableAsemisterData = registeredSemister?.data?.map(({ academicSemister, status, startDate, endDate, _id }: TRegisterTableData) => {
        return {
            key: academicSemister._id,
            name: `${academicSemister?.name} - ${academicSemister?.year}`,
            status,
            startDate: moment(new Date(startDate)).format("MMMM"),
            endDate: moment(new Date(endDate)).format("MMMM"),
            _id
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