import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { getAllGoals, createGoal, updateGoal, deleteGoal} from 'Actions';
import CreateGoalComponent from 'Components/goals/CreateGoalComponent';
import UpdateGoalComponent from 'Components/goals/UpdateGoalComponent';
import { Card, Button, Row, Col,Modal } from 'react-bootstrap';
import { getInProgressGoals, getAchievedGoals } from 'Selectors';



const ListGoalsComponent = ({authorId,inProgressGoals,achievedGoals,getAllGoals,createGoal, updateGoal, deleteGoal}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log('use effect');
        if ( !inProgressGoals.length && !achievedGoals.length) {
            getAllGoals();
        }
    },[getAllGoals]);

    const toggleCompleted = (goal) => {
        const {_id,title,description,authorId,dueOn,completed} = goal;
        updateGoal(_id,title,description,authorId,dueOn,!completed);
    }

    return (
        <React.Fragment>
        <Row>
            <Col md={4} className="border-right">
                <h4>Create a New Goal</h4>
                <CreateGoalComponent authorId={authorId} createGoal={createGoal}/>
            </Col>
            <Col md={4} className="border-right">
            <h4>Goals In Progress</h4>
            <Row>
            {
                inProgressGoals.map((goal,i)=>{
                    return (
                        <Col key={i}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{goal.title}</Card.Title>
                            <Card.Text>
                            {goal.description}
                            </Card.Text>
                            <p>Due In : {goal.dueIn} days</p>
                            <Button variant="primary" onClick={() => toggleCompleted(goal)}>{goal.completed ? 'Achieved':'In Progress'}</Button>
                            <Button variant="secondary" onClick={() => deleteGoal(goal._id) }>Delete</Button>
                            <Button variant="secondary" onClick={handleShow}>Edit</Button>
                        </Card.Body>
                    </Card> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update This Goal!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UpdateGoalComponent 
                            authorId={authorId} 
                            _id={goal._id}
                            updateGoal={updateGoal} 
                            title={goal.title}
                            description={goal.description}
                            dueDate={goal.dueOn}
                            updateCallback={handleClose}
                            />
                        </Modal.Body>
                        
                    </Modal>
                    </Col>)
                })
            }
            </Row>
            </Col>
            <Col md={4}>
                <h4>Goals Achieved</h4>
                <Row>
            {
                achievedGoals.map((goal,i)=>{
                    return (
                        <Col key={i}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{goal.title}</Card.Title>
                            <Card.Text>
                            {goal.description}
                            </Card.Text>
                            <p>Due In : {goal.dueIn} days</p>
                            <Button variant="primary" onClick={() => toggleCompleted(goal)}>{goal.completed ? 'Achieved':'In Progress'}</Button>
                            <Button variant="secondary" onClick={() => deleteGoal(goal._id) }>Delete</Button>
                            <Button variant="secondary" onClick={handleShow}>Edit</Button>
                        </Card.Body>
                    </Card> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update This Goal!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UpdateGoalComponent 
                            authorId={authorId} 
                            _id={goal._id}
                            updateGoal={updateGoal} 
                            title={goal.title}
                            description={goal.description}
                            dueDate={goal.dueOn}
                            updateCallback={handleClose}
                            />
                        </Modal.Body>
                        
                    </Modal>
                    </Col>)
                })
            }
            </Row>
            </Col>
        </Row>
        </React.Fragment>
    )
}



const mapStateToProps = (state) => {
    return { 
        inProgressGoals: getInProgressGoals(state),
        achievedGoals: getAchievedGoals(state)
     };
}

export default connect(mapStateToProps,{getAllGoals,createGoal,updateGoal,deleteGoal})(ListGoalsComponent);
