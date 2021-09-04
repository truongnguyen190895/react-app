import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { SessionList } from '../utility/SessionList';
import Table from 'react-bootstrap/Table';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();
    async function handleLogout() {
        try {
            setError('');
            await logout();
            history.push('/login')
        } catch {
            setError('Fail to log out')
        }

    }

    function handleClick() {
        history.push('/session/create/1')
    }





    return (<div className="dash-board">
        <h1>Information about joined sessions</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Session ID</th>
                    <th>Session Title</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {SessionList.map((session) => {
                    return (
                        <tr>
                            <td>{session.id}</td>
                            <td>{session.title}</td>
                            <td><Link to={`/sessions/detail/${session.id}`}> Detail </Link></td>
                        </tr>)
                })}
            </tbody>
        </Table>
        <Button variant='danger' onClick={handleLogout} style={{ marginRight: '20px' }}>Log Out</Button>
        <Button variant="primary" onClick={handleClick}>Create new group</Button>
    </div>
    )
}
