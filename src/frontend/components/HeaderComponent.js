import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Navbar, Nav} from 'react-bootstrap';
import { doSignOut } from '../redux/actions';
import { withRouter } from 'react-router-dom';


const HeaderComponent = ({ user, doSignOut, history }) => {

    const signOut = (e) => {
        e.preventDefault();
        doSignOut().then(() => history.push('/'));
    };

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href=""><Link to="/">Goal Setter</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {
                user.loaded && <React.Fragment>
                    <Nav.Link href=""><Link to="/dashboard">Dashboard</Link></Nav.Link>
                    <Nav.Link href="" onClick={signOut}>Sign Out</Nav.Link>
                </React.Fragment>
            }
            {
                !user.loaded && <React.Fragment>
                    <Nav.Link href=""><Link to="/signin">Sign In</Link></Nav.Link>
                    <Nav.Link href=""><Link to="/signup">Sign Up</Link></Nav.Link>
                </React.Fragment>
            }

            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
}

export default withRouter(connect(mapStateToProps,{ doSignOut })(HeaderComponent));