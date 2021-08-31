import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import SignOut from "./Logout";

export default function Dashboard() {
  const history = useHistory();

  function handleClick() {
    history.push("/Session/create/1");
  }

  const testData = [
    {
      id: 1,
      title: "Ohoho",
    },
    {
      id: 2,
      title: "Ohaha",
    },
    {
      id: 3,
      title: "Ohihi",
    },
  ];

  const boderdStyle = { border: "1px solid black" };

  return (
    <div className="dash-board">
      <SignOut />
      <h1>Information about joined sessions</h1>
      <table className="table-session">
        <tr>
          <th style={boderdStyle}>ID</th>
          <th style={boderdStyle}>Title</th>
          <th style={boderdStyle}>Detail</th>
        </tr>
        {testData.map((item) => {
          return (
            <tr style={boderdStyle}>
              <td style={boderdStyle}>{item.id}</td>
              <td style={boderdStyle}>{item.title}</td>
              <td style={boderdStyle}>Detail</td>
            </tr>
          );
        })}
      </table>
      <Button variant="primary" onClick={handleClick}>
        Create new group
      </Button>
    </div>
  );
}
