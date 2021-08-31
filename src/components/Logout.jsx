import React from "react";
import { auth } from "../firebase.js";
import { Card, Button } from "react-bootstrap";

function SignOut() {
  return (
    <div>
      <Button variant="danger" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    </div>
  );
}

export default SignOut;
