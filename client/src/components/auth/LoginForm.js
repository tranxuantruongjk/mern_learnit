import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
  // Context
  const {loginUser} = useContext(AuthContext);

  // Router
  // const navigate = useNavigate();

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const [alert, setAlert] = useState(null);  

  const {username, password} = loginForm;

  const onChangeLoginForm = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const login = async e => {
    e.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      // console.log(loginData);
      if (loginData.success) {
        // navigate('/dashboard');
      } else {
        setAlert({type: 'danger', message: loginData.message});
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group>
          <Form.Control
            value={username}
            type="text"
            placeholder="Username"
            name="username"
            required
            className="mb-3"
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            required
            className="mb-3"
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mb-3">
          Login
        </Button>
      </Form>
      <p>
				Don't have an account?
				<Link to='/register'>
					<Button variant='info' size='sm' className="mx-2">
						Register
					</Button>
				</Link>
			</p>
    </>
  );
};

export default LoginForm;
