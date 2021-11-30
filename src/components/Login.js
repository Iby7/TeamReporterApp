import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'

function Login() {
    return (

        <div className="form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <div className="heading"><h1>Login</h1></div>
       <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Login
        </Button>
        <div>
        {'\n'}
        <Link to="/Signup">Don't have account? Sign Up</Link>
        </div>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Login;