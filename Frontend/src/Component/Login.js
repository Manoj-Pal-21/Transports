import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import domain from '../utils/utils';
import "./Form.css";

const Login = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    window.scrollTo(0, 0);

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch(`${domain}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (!data.success || !data) {
            window.alert(data.error);
        } else {
            window.alert(data.message)
            props.update(true);
            history.push("/");
        }
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <h2 className="title">login</h2>
                <div className="form-container">
                    <form className="form-wrapper">
                        <div className="email">
                            <label className="label">Email</label>
                            <input className="input" type="email" value={email} name="email" id="email" autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your email"
                                required
                            />
                        </div>
                        <div className="password">
                            <label className="label">Password</label>
                            <input className="input" type="password" value={password} name="password" id="password" autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="your password"
                                required
                            />
                        </div>
                        <div>
                            <button className="submit" value="log In" onClick={loginUser}>
                                Signin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);
