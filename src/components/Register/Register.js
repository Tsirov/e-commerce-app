import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { registerSuccess } from '../../redux/userRedux';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState(null);

    async function onSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        const body = {
            email: formData.get('email').trim(),
            username: formData.get('username').trim(),
            password: formData.get('password').trim(),
            repeatPass: formData.get('repeatPass').trim()
        };

        try {
            const data = await fetch('https://my-server-app-react.herokuapp.com/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            // const data = await fetch('http://localhost:5000/api/auth/register', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(body)
            // });
            if (data.status === 405) {
                const result = await data.json();
                setErrMsg(result)
            } else {
                setErrMsg(null);
                const { userData, token } = await data.json();
                dispatch(registerSuccess({ email: userData.email, username: userData.username, _id: userData._id, token }))
                navigate('/')
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={ onSubmitHandler } method="POST">
                    <p className="field">
                        <label htmlFor="email">Email </label>
                        <span className="input">
                            <input type="text" name="email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="username">Username </label>
                        <span className="input">
                            <input type="text" name="username" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password </label>
                        <span className="input">
                            <input type="password" name="password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeatPass">Repeat Password </label>
                        <span className="input">
                            <input type="password" name="repeatPass" />
                        </span>
                    </p>
                    <span style={ { 'color': 'red' } }>

                        { errMsg ? errMsg.map((el, index) => <p key={ index }>{ el }</p>) : <p></p> }
                    </span>

                    <span>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the
                        <b> PRIVACY POLICY</b>
                    </span>
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    );
}

export default Register;