import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory,
} from "react-router-dom";

export default function Session() {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');

    function handleClick(e) {
        e.preventDefault();
        history.push('/session/create/2')
    }

    function handleBack(e) {
        e.preventDefault();
        history.push('/')
    }



    return (
        <div className='create-session'>
            <h1 style={{ margin: '30px 0', textAlign: 'center' }}>Create new session to Vote</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ marginBottom: '40px' }} type="email" placeholder="Your name" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your current location</Form.Label> <br />
                    <Button style={{ marginBottom: '40px' }}>Chose from map</Button>
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>
                <Button variant="primary" onClick={handleBack} style={{ margin: '50px 20px 0 0' }}>
                    Back
                </Button>
                <Button variant="primary" type="submit" onClick={handleClick} style={{ marginTop: '50px' }}>
                    Next
                </Button>
            </Form>
        </div>
    )
}
