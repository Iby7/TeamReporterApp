import { Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom'
import "./Styles.css"

function Signup() {
    return (
        <div id="form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        <Button type="primary" htmlType="submit">
        <Link to="/">You have already account?</Link>
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Signup;