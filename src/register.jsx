import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form] = Form.useForm();

  async function handleSubmit() {
    let user = await axios.post("http://localhost:2000/register", {
      username: form.getFieldValue("username"),
      ssn: form.getFieldValue("ssn"),
      password: form.getFieldValue("password"),
      role: "user",
    });
    console.log(user);
  }

  return (
    <div>
      <button className="">
        <Link to="/">Home</Link>
      </button>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <h3 className="text-4xl font-bold text-purple-600">
            Create you account!
          </h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 bg-pink-50 rounded-md overflow-hidden shadow-md sm:max-w-md sm:rounded-lg">
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            form={form}
            onFinish={handleSubmit}
          >
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
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="SSN"
              name="ssn"
              rules={[
                {
                  required: true,
                  message: "Please input your SSN!",
                  max: 10,
                  min: 10,
                },
                {
                  len: 10,
                  message: "SSN must be 10 digits!",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              required
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item>
              <button className="" type="primary" htmlType="submit">
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
