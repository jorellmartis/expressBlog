import Authentication from "@/components/Layout/Authentication"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { styled } from "@stitches/react"
import Link from "next/link"
import { NextPageWithLayout } from "./_app"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react"

  const RegisterHeader = styled(FlexBox,{
      gap: 35
  })

const Register : NextPageWithLayout = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  return (
      <>
      <RegisterHeader flexDirection="column">
        <FlexBox alignItems="center">
            <Typography css={{marginRight:40}} textType="Cap1" textTransform="uppercase" as='h2'>
              Sign UP
            </Typography>
        </FlexBox>
      </RegisterHeader>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography level={6}> Email</Typography>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email-address" />
        </Form.Item>
        <Typography level={6}> Password</Typography>
        <Form.Item
          name="password"
          rules={
            [
              { required: true, message: 'Please input your Password!' },
              { min: 6, message: 'Password must be at least 6 characters.' },
              {pattern: /^(?=.*[A-Z])(?=.*\d).+$/, message: 'Password must contain at least one uppercase letter and one number.',},
            ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          />
        </Form.Item>
        <Typography level={6}> Confirm Password</Typography>
        <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator: (_, value) => {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        >
          <Input.Password 
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
      </Form.Item>

        <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form>
    </>
  )
}
export default Register

Register.getLayout = (page: React.ReactNode) => (
    <Authentication>
        {page}
    </Authentication>
)
