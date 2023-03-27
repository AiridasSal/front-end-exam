import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../api";
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerUser({ email, password });
            setMessage("User registered successfully");
            navigate('/login');
        } catch (error) {
            setMessage("Error during registration");
            console.error("Error during registration:", error);
        }
    };

    return (
        <div>

            <form
                onSubmit={handleSubmit}
                className="register"
            >
                <h1>Register</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                {message && <p>{message}</p>}
                <div>
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </form>

        </div>

    );
};

export default Register;
