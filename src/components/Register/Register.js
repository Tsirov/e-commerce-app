import { useNavigate } from 'react-router-dom';

import { main} from '../../server/routers/index'
import './Register.css';
// const{} = require('../../server/models/User');




const Register = () => {
    const navigate = useNavigate();

    async function onSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPass');

        const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/gm;
        console.log(email, username, password);

        if (!regex.test(email)) {
            console.log('email is not valid');
            return;
        } else if (username.length <= 0) {
            console.log('username do not match');

            return;
        } if (password != repeatPass) {
            console.log('paswword do not match');
            return;
        }

        const body = {
            email, username, password
        }

    //    await main('login',body)
        console.log('after using USer 111111111111111');
        

        navigate('/')

    }

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={onSubmitHandler} method="POST">
                    <p className="field">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" />
                    </p>
                    <p className="field">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username"/>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password"/>
                    </p>
                    <p className="field">
                        <label htmlFor="repeatPass">Repeat Password </label>
                        <input type="password" name="repeatPass"/>
                    </p>


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