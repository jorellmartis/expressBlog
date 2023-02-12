import { signIn} from "next-auth/react"
import { NextPageWithLayout } from "@/pages/_app";
import Authentication from "@/components/Layout/Authentication";
import { styled } from "@stitches/react";
import FlexBox from "@/components/UIKit/FlexBox";
import ButtonUI from "@/components/UIKit/ButtonUI";
import { theme } from "@/stitches.config";
import Typography from "@/components/UIKit/Typography";
import { AppleIco, FacebookIco, GoogleIco } from "@/components/Icons/Authentication";
import Link from "next/link";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";

const LoginWrapper = styled(FlexBox,{
  width: '35%',
  padding: '2%',
  gap: 45,
  background: theme.component.formBgColor
})
const LoginHeader = styled(FlexBox,{
    gap: 35
})
const Login : NextPageWithLayout = () => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
    const handleGoogleAuth = async(event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        signIn('google',{callbackUrl:'http://localhost:3000'})
    }
  return (
    <LoginWrapper flexDirection="column"  alignItems="flexStart">
        <LoginHeader flexDirection="column">
          <FlexBox alignItems="center">
            <Typography css={{marginRight:40}} textType="Cap1" textTransform="uppercase" as='h2'>
              Sign IN
            </Typography>
            <FlexBox css={{gap:20}}>
              <FacebookIco/>
              <AppleIco/>
              <Link href='' onClick={handleGoogleAuth}>
              <GoogleIco/>
              </Link>
            </FlexBox>
          </FlexBox>
          <Typography textType="Bd01" as='h3'>
            If you don’t have an account register
            you can<br/>  
            <Link style={{color:'#FFD050'}} href={'/register'}>
              Resgister Here
            </Link>
          </Typography>
        </LoginHeader>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography level={6}> Email</Typography>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Typography level={6}> Password</Typography>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form>
      {/* <ButtonUI bSize="large" bLink="" bText="Sign In" onClick={handleGoogleAuth}/> */}
    </LoginWrapper>
  )
};
export default Login

Login.getLayout = (page: React.ReactNode) => (
  <Authentication>
    {page}
  </Authentication>
)

