import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import domain from '../utils/utils';
import "./Form.css";

const SignUp = () => {
    const history = useHistory();
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    window.scrollTo(0, 0);

    let name, value;

    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value
        console.log(name, value)

        setUser({ ...user, [name]: value });

    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password } = user;
        const res = await fetch(`${domain}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await res.json();

        if (!data.success || !data) {
            window.alert(data.error);
        } else {
            window.alert(data.message);
             history.push("/login");
        };
    };

    return (
        <div className="container">
            <div className="app-wrapper mb-3 mt-3">
                <h2 className="title">Create Account</h2>
                <div className="form-container">
                    <form className="form-wrapper">
                        <div className="name">
                            <label className="label">Full Name</label>
                            <input className="input" type="name" value={user.name} name="name" id="name" autoComplete="off"
                                onChange={handleInputs}
                                placeholder="your name"
                                required
                            />
                        </div>
                        <div className="email">
                            <label className="label">Email</label>
                            <input className="input" type="email" value={user.email} name="email" id="email" autoComplete="off"
                                onChange={handleInputs}
                                placeholder="your email"
                                required
                            />

                        </div>
                        <div className="password">
                            <label className="label">Password</label>
                            <input className="input" type="password" value={user.password} name="password" id="password" autoComplete="off"
                                onChange={handleInputs}
                                placeholder="your password"
                                required
                            />
                        </div>
                        <div>
                            <button className="submit" onClick={PostData}>
                                SignUp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
