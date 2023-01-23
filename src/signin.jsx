import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";

export default function Signin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { from } = location.state || { from: "user" };

  async function handleSubmit() {
    console.log("from", from);
    try {
      let user = await axios.post("http://localhost:2000/login", {
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
      });

      if (user) {
        navigate(from == "user" ? "/voting" : "/admin");
      }
    } catch (e) {
      message.error("Invalid username or password");
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-pink-50 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <Form form={form} onFinish={handleSubmit} className="mt-6">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            label="Username"
            name="username"
            className="mb-2"
          >
            <Input type="text" className="" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            label="Password"
            name="password"
            className="mb-2"
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <button
              htmlFor="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Sign in
            </button>
          </Form.Item>
        </Form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a className="font-medium text-purple-600 hover:underline">
            <Link to={"/register"}>Register</Link>
          </a>
        </p>
      </div>
    </div>
  );
}
