import React,{useRef, useEffect, useCallback} from 'react';

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const UpdateGoalComponent = ({authorId,title,description,dueDate,_id,updateGoal,updateCallback}) => {
    const titleRef = useRef('');
    const descRef = useRef('');
    const dueRef = useRef('');

    useEffect(()=>{
        titleRef.current.value = title||'';
        descRef.current.value = description||'';
        dueRef.current.value = dueDate||'';
    },[title,description,dueDate]);

    const onSubmit = (e) => {
        e.preventDefault();
        updateGoal(_id,titleRef.current.value,descRef.current.value,authorId,dueRef.current.value).then(() => {
            titleRef.current.value = '';
            descRef.current.value = '';
            dueRef.current.value = '';
            updateCallback();
        });

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
                        <Form.Control as="textarea" rows="3" ref={descRef} placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group controlId="formBasicdueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" ref={dueRef} placeholder="Due On" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update Goal
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateGoalComponent;