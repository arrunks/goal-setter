import React,{useRef} from 'react';
import axios from 'axios';

import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Motivation } from  'Components/motivation';
import styles from './style.css';

const SignUpComponent = ({history}) => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const dobRef = useRef('');

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/users',{
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            dob:dobRef.current.value
        }).then(()=> {
            history.push('/signin');
        })
    }
    return (
        <Container  fluid>
            <Row>
                <Col md={8} className={styles.signupContainer} >
                    <Motivation/>
                </Col>
                <Col className="pt-4">
                    <Form onSubmit={formSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicdob">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" ref={dobRef} placeholder="Enter your dob" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpComponent;