import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import style from './style.css';

const StyledInitialLetter = ({text}) => {
    return (<span className={`${style.styledInitialLetter} mb-2 mx-auto`}>{text}</span>)
}

export const WhyWriteComponent = () => {
    return (
        <Container className="border-top pt-5 mb-5">
        <Row>
           <h3 className="mx-auto mb-5">Write SMART Goals</h3> 
        </Row>
        <Row>
            <Col className="pt-4 text-center border">
                <StyledInitialLetter text="s"/>
                <h4>Specific</h4>
                <p>Provide a clear description of what needs to be achieved.</p>
            </Col>
            <Col className="pt-4 text-center border">
                <StyledInitialLetter text="M"/>
                <h4>Measurable</h4>
                <p>Include a metric with a target that indicates success.</p>
            </Col>
            <Col className="pt-4 text-center border">
                <StyledInitialLetter text="a"/>
                <h4>Achievable</h4>
                <p>Set a challenging target, but keep it realistic.</p>
            </Col>
            <Col className="pt-4 text-center border">
                <StyledInitialLetter text="r"/>
                <h4>Relevant</h4>
                <p>Keep your goal consistant with higher-level goals.</p>
            </Col>
            <Col className="pt-4 text-center border">
                <StyledInitialLetter text="t"/>
                <h4>Time-bound</h4>
                <p>Set a date for when your goal needs to be achieved.</p>
            </Col>
        </Row>
    </Container>
    )
}

