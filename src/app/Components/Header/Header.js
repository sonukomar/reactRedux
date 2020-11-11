import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import {connect} from 'react-redux';

const Header = ({userName,isLoggedIn}) => {
    return (
        <Row sm={12}>
            <Col>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">School Attendance System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#">{isLoggedIn ? userName:''}</Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                               {isLoggedIn ? 'Logout' : 'Login'}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
return({
    getLoginForm : () => {alert('css')}
})
};

const mapStatetoProps = state => ({
isLoggedIn:state.LoginReducer.isLoggedIn,
userName: state.LoginReducer.form.email
});

export default connect(mapStatetoProps,mapDispatchToProps)(Header);
