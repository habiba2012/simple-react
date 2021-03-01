import React from 'react';
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {name, img, salary} = props.player;
    const addPlayerHandler = props.addPlayerHandler;
    return (
        <div className="container-card">
            <Card className="card" >
                <Card.Img src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Salary $ {salary}</Card.Text>
                </Card.Body>
                <Button onClick={() => addPlayerHandler(props.player)} variant="success"><FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
            </Card>
        </div>
    );
};

export default Player;