import React from "react";
import { Container } from 'react-bootstrap';
import styles from './style.css';

export const WhyWrite = () => {
    return (
        <Container className="mb-5">
            <h4 className={styles.writeGoalContainer}>Why Goals should be written down</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><h5>&#8982; Goals Help You Overcome Procrastination.</h5></li>
                <li className="list-group-item"><h5>&#8982; Goals Keep You Locked In And Undistracted.</h5></li>
                <li className="list-group-item"><h5>&#8982; Goals Allow You To Measure Progress.</h5></li>
                <li className="list-group-item"><h5>&#8982; Goals give you a starting point and a destination to reach.</h5></li>
                <li className="list-group-item"><h5>&#8982; Goals 'held' in the mind are more likely to be jumbled up with the other 1500 thoughts per minute that the average human being experiences.</h5></li>
            </ul>
        </Container>
    )
}