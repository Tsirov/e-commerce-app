import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/userRedux';
import '../Register/Register.css';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const style = {
        width: "25%",
        padding: "15px"
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (data.status === 405) {
                const result = await data.json();
                setIsLoading(false);
                setErrMsg(result);
            } else {
                setErrMsg(null);
                const { userData, token } = await data.json();
                dispatch(loginSuccess({ email: userData.email, username: userData.username, _id: userData._id, token }))
                setIsLoading(false)
                navigate('/')
            }

        } catch (err) {
            navigate("/404")
            console.log(err);

        }
    }

    return (
        <div className="register-container">
            <div style={ style } className="register-wrapper">
                <h1>SIGN IN</h1>
                <form onSubmit={ onSubmit } action="">
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input onChange={ (e) => setEmail(e.target.value) } name="email" type="text" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input onChange={ (e) => setPassword(e.target.value) } name="password" type="password" />
                        </span>
                    </p>

                    { isLoading
                        ? <button style={ { backgroundColor: 'transparent', fontWeight: 'normal', color: 'black' } } disabled={ true }> LOGIN</button>
                        : <button > LOGIN</button>
                    }
                    <span style={ { 'color': 'red' } }>

                        { errMsg ? errMsg.map((el, index) => <p key={ index }>{ el }</p>) : <p></p> }
                    </span>

                    <span></span>
                    <Link to="/register"> If you are forget your password or you don'n have account, please make a new one.</Link>
                </form>
            </div>
        </div>

    );
}

export default Login;