import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const { v4: uuidv4 } = require("uuid");
uuidv4();

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  async function handleLogout() {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("Fail to log out");
    }
  }

  function handleClick() {
    history.push("/session/create/1");
  }

  const testData = [
    {
      id: uuidv4(),
      title: "Gogi",
    },
    {
      id: uuidv4(),
      title: "Phan",
    },
    {
      id: uuidv4(),
      title: "WangWang",
    },
  ];

  const boderdStyle = { border: "1px solid black" };

  return (
    <div className="dash-board">
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
              <td style={{ cursor: "pointer" }}>
                <Link
                  to="/session/create/3"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <FaSearch />
                </Link>
              </td>
            </tr>
          );
        })}
      </table>

      <Button
        variant="danger"
        onClick={handleLogout}
        style={{ margin: "20px 20px 20px 0px" }}
      >
        Log Out
      </Button>
      <Button variant="primary" onClick={handleClick}>
        Create new group
      </Button>
    </div>
  );
}
