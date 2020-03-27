import React from 'react';
import { connect } from 'react-redux';

import ListGoalsComponent from './goals/ListGoalsComponent';

import {Container, Row, Col} from 'react-bootstrap';

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
                <Container>
                    <Row>
                        <Col>
                           {
                                <h2>Welcome {this.props.name}</h2>
                            }
                        </Col>
                    </Row>
                    <Row>
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
