import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Navbar, Nav, Image} from 'react-bootstrap';
import { doSignOut } from 'Actions';
import { withRouter } from 'react-router-dom';


const HeaderComponent = ({ user, doSignOut, history }) => {

    const signOut = (e) => {
        e.preventDefault();
        doSignOut().then(() => history.push('/'));
    };

    return (
        <Navbar bg="light" expand="lg" sticky="top">
        <Link className="navbar-brand" to="/"><Image src="https://res.cloudinary.com/dgrovf3st/image/upload/c_scale,h_51/v1585548617/goal-setter/set-your-goals.png" thumbnail /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            {
                user.loaded && <React.Fragment>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    <Nav.Link href="" onClick={signOut}>Sign Out</Nav.Link>
                </React.Fragment>
            }
            {
                !user.loaded && <React.Fragment>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
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