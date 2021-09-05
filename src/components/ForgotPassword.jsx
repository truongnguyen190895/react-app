import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions");
        } catch {
            setError("Failed to reset password");
        }

        setLoading(false);
    }

    return (
        <div className="forgot-password">
            <h1 style={{ textAlign: "center" }}>Recover Account</h1>
            <Card className>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button
                            style={{ marginTop: "10px" }}
                            disabled={loading}
                            className="w-100"
                            type="submit"
                        >
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link style={{ textDecoration: "none" }} to="/login">
                            Login
                        </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account?{" "}
                <Link style={{ textDecoration: "none" }} to="/signup">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
