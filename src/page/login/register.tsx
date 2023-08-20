import React from "react";

import { Button, Form, Input, message } from "antd";

import { Link } from "react-router-dom";
import { xzzRegister } from "../../api/userinfo";

type FieldType = {
  username: string;
  password: string;
};



const RegisterForm: React.FC = () => {

  const [messageApi, contextHolder] = message.useMessage();

const onFinish = async (forminfo: FieldType) => {
  console.log("🚀 ~ file: register.tsx:16 ~ onFinish ~ forminfo:", forminfo);

  let res: any = await xzzRegister(forminfo);

  console.log("🚀 ~ file: register.tsx:15 ~ onFinish ~ res:", res);

  if (res?.statusCode.toString().startsWith("2")) {
    console.log("响应成功!", res);
  } else {
    // messageApi.error(res.error)
    console.log("响应失败!", res);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const checkName = (name: string) => {};

  return (
    <>
      {contextHolder}
      <div className="form_wrapper2 register">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="账号"
            name="username"
            rules={[
              { required: true, message: "请输入用户名!" },
              { min: 6, max: 20, message: "用户名长度必须在6-20之间!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码!" },
              { min: 8, max: 30, message: "密码最少8位,最多30位字符!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "10px" }}
            >
              注册
            </Button>
            <Link to="/login">
              <div style={{ margin: "10px", float: "right" }}>
                去登录
                {/* <a href="" >
      </a> */}
              </div>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;

