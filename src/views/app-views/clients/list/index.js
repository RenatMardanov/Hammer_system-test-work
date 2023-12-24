import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import fetchClients from "services/fetchClientsService";
import Loading from "components/shared-components/Loading";

const UserList = () => {
    const [users, setUsers] = useState();
    const [fetchingData, setFetchingData] = useState(true);

    const history = useHistory();

    const deleteUser = (userId) => {
        setUsers(users.filter((item) => item.id !== userId));
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };
    const tableColumns = [
        {
            title: "User",
            dataIndex: "name",
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: "City",
            dataIndex: ["address", "city"],
            sorter: {
                compare: (a, b) => a.address.city.localeCompare(b.address.city),
            },
        },
        {
            title: "Company",
            dataIndex: ["company", "name"],
            sorter: {
                compare: (a, b) => a.address.city.localeCompare(b.address.city),
            },
        },
        {
            title: "Website",
            dataIndex: "website",
            sorter: {
                compare: (a, b) => a.address.city.localeCompare(b.address.city),
            },
        },
        {
            title: "",
            dataIndex: "actions",
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Edit">
                        <Button
                            type="primary"
                            className="mr-2"
                            icon={<EditOutlined />}
                            onClick={() => {
                                history.push(`${APP_PREFIX_PATH}/clients/edit/${elm.id}`);
                            }}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                                deleteUser(elm.id);
                            }}
                            size="small"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    useEffect(() => {
        try {
            if (fetchingData) {
                const data = fetchClients.get();
                data.then((data) => setUsers(data)).finally(() => setFetchingData(false));
            }
        } catch {
            console.error("FetchingUsers Error");
        }
    }, [fetchingData]);

    return (
        <Card bodyStyle={{ padding: "0px" }} open={false}>
            {fetchingData && <Loading />}
            <Table columns={tableColumns} dataSource={users} rowKey="id" />
        </Card>
    );
};

export default UserList;
