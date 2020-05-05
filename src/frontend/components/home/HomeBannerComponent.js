import React from 'react';
import { Container, Jumbotron,Row, Col} from 'react-bootstrap';
import { Motivation } from  'Components/motivation';

export const HomeBannerComponent = () => {
    return (
        <Jumbotron fluid className="banner-container">
        <Container>
            <Row>
                <Col md={6}>
                    <h1 className="color-white">Set Your Goals</h1>
                    <p className="color-white">
                        Track your progress
                    </p>
                </Col>
                <Col md={6}>   
                 <Motivation/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    )
}