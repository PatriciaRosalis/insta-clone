import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string>();
    const navigate = useNavigate();

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("http://localhost:3000/auth/sign-in", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then((response) => {
                if (response.status === 400) {
                    setError("Please insert both username and password.")
                } else if (response.status === 401) {
                    setError("Username or password is wrong.")
                } else {
                    setError("")
                    navigate("/feed")
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <div>
            <div>
                <p>Hello, welcome back to insta-clone.</p>
                <form onSubmit={handleSignIn}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button >Login</button>
                    <b>{error}</b>
                </form>
            </div>
            <div>
                <p>Don't have an account?</p>
                <Link to="/register">Register here.</Link>
            </div>
        </div>
    )
}

export default SignIn;
