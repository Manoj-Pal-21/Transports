import React from 'react';
import "./Form.css";

const Login = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <h2 className="title">login</h2>
                <div className="form-container">
                    <form className="form-wrapper">
                        <div className="email">
                            <label className="label">Email</label>
                            <input className="input" name="email" />
                        </div>
                        <div className="password">
                            <label className="label">Password</label>
                            <input className="input" name="password" />
                        </div>
                        <div>
                            <button className="submit" >
                                Signin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
