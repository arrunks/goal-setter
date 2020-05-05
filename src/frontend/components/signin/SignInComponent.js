import React,{useRef} from 'react';
import { connect } from 'react-redux';
import { doSignIn } from 'Actions';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Motivation } from  'Components/motivation';
import styles from './style.css';

export const SignInComponent = ({history,doSignIn}) => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const onSubmit = (e) =>{
        e.preventDefault();
        doSignIn(emailRef.current.value, passRef.current.value).then(() => {
            history.push('/dashboard');
        });
    };
    return (
        <Container fluid>
            <Row>
                <Col md={8} className={styles.signinContainer}>
                    <Motivation/>
                </Col>
                <Col className="pt-4">
                    <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passRef} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default connect(null,{doSignIn})(SignInComponent);