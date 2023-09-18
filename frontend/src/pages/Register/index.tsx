import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div>
                <p>Hello, welcome back to insta-clone.</p>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    First name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Last name:
                    <input type="text" name="lastName" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <button>Login</button>
            </div>
            <div>
                <p>Have an account?</p>
                <Link to="/log-in">Log in.</Link>
            </div>
        </div>
    )
}

export default Register;
