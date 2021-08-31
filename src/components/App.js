import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Session from "./Session";
import Vote from "./Vote";
import Result from "./Result";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [ user ] = useAuthState(auth);
  return (
    <Container
      className="d-flex
    justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "800px" }}>
      <div>
        
      </div>
        <Router>
          <AuthProvider>
            <Switch>
              {user ? <PrivateRoute exact path="/" component={Dashboard} /> : <Login />}
              
              <Route exact path="/session/create/1" component={Session} />
              <Route exact path="/session/create/2" component={Vote} />
              <Route exact path="/session/create/3" component={Result} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
