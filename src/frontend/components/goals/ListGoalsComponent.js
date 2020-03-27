import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getAllGoals, createGoal } from '../../redux/actions';
import CreateGoalComponent from './CreateGoalComponent';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ListGoalsComponent = ({authorId,goals,getAllGoals,createGoal}) => {
    useEffect(() => {
        console.log('use effect')
        getAllGoals();
    },[getAllGoals]);

    return (
        <div>
        <Row>
            <Col>
                <CreateGoalComponent authorId={authorId} createGoal={createGoal}/>
            </Col>
        </Row>
        <Row>
            {
                goals.map((goal,i)=>{
                    return (
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{goal.title}</Card.Title>
                            <Card.Text>
                            {goal.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> 
                    </Col>)
                })
            }
        </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { goals } = state;
    return { goals };
}

export default connect(mapStateToProps,{getAllGoals,createGoal})(ListGoalsComponent);
