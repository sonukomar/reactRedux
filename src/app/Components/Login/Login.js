import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/BUtton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';
import { connect } from 'react-redux';
import {handleLoginFormChange, handleLoginFormSubmit} from '../../Actions/Login.action';

const Login = (props) => {

const {email,password,rememberMe} = props.form;
const {handleChange,loginFormSubmit}= props;

const handleFieldChange = (e) => {
    let obj = {
        email:email,
        password:password,
        rememberMe:rememberMe
    };
    obj[e.target.name] = e.target.value;
    handleChange(obj);
} 
const loginFormSu = (e) => {
    e.preventDefault();
    loginFormSubmit();
}

return (
    <Row sm={12} id="loginForm">
        <Col></Col>
        <Col>
            <h2>Please login to continue</h2>
            <Form onSubmit={loginFormSu}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'}value={email} onChange={handleFieldChange} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name={'password'} placeholder="Password" onChange={handleFieldChange} value={password} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name={'rememberMe'} label="Remember Me" onChange={handleFieldChange} checked={rememberMe}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Col>
        <Col></Col>
    </Row>
)
};

const mapStateToProps = (state) => {
debugger;    
return({
    form : state.LoginReducer.form,
    isLoggedIn: state.LoginReducer.isLoggedIn
    });
}

const mapDispatchToProps = (dispatch) => {
return ({
    handleChange:(payload) => {dispatch(handleLoginFormChange(payload))},
    loginFormSubmit:(payload) => {dispatch(handleLoginFormSubmit(payload))}
})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
