import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { useUser } from "../UserContext";

const Login = () => {
    
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try {
            const response = await loginUser(email, password);
            if (response.msg === "Successfully logged in") {
                setMessage(`Logged in successfully`);
                setUser(response.user);
                navigate('/');
            } else {
                setMessage('Error during login');
            }
        } catch (error) {
            setMessage('Error during login');
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="login"
            >
                <h1>Login </h1>
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
                    <button type="submit">Sign In</button>
                    {message && <p>{message}</p>}
                    <div>

                        <p>Don't have an account yet? <Link to="/register">Register here</Link></p>
                    </div>

                </div>
            </form>

        </div>

    );
};

export default Login;
