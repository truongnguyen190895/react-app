import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import firebase from "firebase";
import { auth } from "../firebase.js";
// import { useAuth } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

export default function Login() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button variant="primary" onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
    </div>
  );
}
