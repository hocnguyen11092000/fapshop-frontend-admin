import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import { AuthContext } from "../../context/authContext";
import { LoginPayload } from "../../model/common";
import "./login.less";

const Login = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const mutation = useMutation((values: LoginPayload) => {
        return userApi.login(values);
    });

    const onFinish = async (values: LoginPayload) => {
        mutation.mutate(values);
        dispatch({
            type: "login",
            payload: { user: undefined, accessToken: "123" },
        });

        if (mutation.data?.accessToken) {
            navigate("/");
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__container-heading">Login</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
