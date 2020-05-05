import React from 'react';
import { connect } from 'react-redux';

import ListGoalsComponent from 'Components/goals/ListGoalsComponent';

import {Container, Row, Col} from 'react-bootstrap';
import { Motivation } from  'Components/motivation';
import styles from './style.css';

class DashBoardComponent extends React.Component {

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component dit update')
    }

    render(){
        console.log('render');
        return (
            <div>
                <Container fluid>
                    <Row className={styles.dashboardBanner}>
                        <Col md={4} className="pt-4">
                           {
                                <h2 className="mb-4 color-white">Howdy! {this.props.name}</h2>
                            }
                        </Col>
                        <Col md={8}>
                            <Motivation/>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col>
                           {
                                this.props.loaded && <ListGoalsComponent authorId={this.props._id}/>
                            }
                        </Col>
                    </Row>
                </Container>
               
                
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    console.log('mapstatetoprops');
    const { user } = state;
    return user;
}

export default connect(mapStateToProps)(DashBoardComponent);
