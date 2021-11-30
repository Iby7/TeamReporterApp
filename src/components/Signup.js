import { Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div className="form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
        <div className="heading"><h1>Signup</h1></div>
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input />
      </Form.Item>
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        <div>
        {'\n'}
        <Link to="/">You have already account?</Link>
        </div>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Signup;