import React,{useRef} from 'react';

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const CreateGoalComponent = ({authorId,createGoal}) => {
    const titleRef = useRef('');
    const descRef = useRef('');
    const dueRef = useRef('');

    const onSubmit = (e) => {
        e.preventDefault();
        createGoal(titleRef.current.value,descRef.current.value,authorId,dueRef.current.value);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={onSubmit} >
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={titleRef} placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control type="text" ref={descRef} placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group controlId="formBasicdueDate">
                        <Form.Label>Due On</Form.Label>
                        <Form.Control type="date" ref={dueRef} placeholder="Due On" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Goal
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateGoalComponent;