import React, { useEffect, useState } from "react";
import { Form, Button, Input, DatePicker, Row, Col } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import fetchClients from "services/fetchClientsService";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditProfile = () => {
    const [client, setClient] = useState();
    const [loading, setLoading] = useState(true);
    const { clientId } = useParams();
    const history = useHistory();
    useEffect(() => {
        fetchClients
            .get(clientId)
            .then((res) => setClient(res))
            .finally(() => setLoading(false));
    }, [clientId]);

    console.log(client);

    const onFinish = () => {
        setLoading(true);
        fetchClients
            .set(clientId)
            .then(() => {
                console.log("then");
                history.push(`${APP_PREFIX_PATH}/clients/list`);
            })
            .catch((error) => {
                console.error(`Failed to update user: ${error}`);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div>
            {loading && <Loading />}
            {client && (
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            name: client.name,
                            email: client.email,
                            username: client.username,
                            dateOfBirth: client?.dateOfBirth,
                            phoneNumber: client.phone,
                            website: client.website,
                            address: client.address.street,
                            city: client.address.city,
                            postcode: client.address.zipcode,
                        }}
                    >
                        <Row className="justify-content-center">
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your name!",
                                                },
                                            ]}
                                            style={{ display: "flex", alignContent: "center" }}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your username!",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "email",
                                                    message: "Please enter a valid email!",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item label="Date of Birth" name="dateOfBirth">
                                            <DatePicker className="w-100" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item label="Phone Number" name="phoneNumber">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item label="Website" name="website">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item label="Address" name="address">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item label="City" name="city">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item label="Post code" name="postcode">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default EditProfile;
