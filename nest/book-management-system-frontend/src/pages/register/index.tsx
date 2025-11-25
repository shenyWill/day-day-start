import { Button, Form, Input, message, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api";

export default function Register() {
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string; confirmPassword: string }) => {
    try {
      const res = await register(values.username, values.password);
      if (res.status === 201) {
        message.success("注册成功");
        navigate("/login");
      } else {
        message.error("注册失败");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "80px auto", padding: "0 16px" }}>
      <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        图书管理系统
      </Typography.Title>
      <Form layout="horizontal" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名" }]}> 
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}> 
          <Input.Password placeholder="请输入" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "请确认密码" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请输入" />
        </Form.Item>

        <div style={{ textAlign: "right", marginBottom: 16 }}>
          已有账号？ <Link to="/login">去登录</Link>
        </div>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}