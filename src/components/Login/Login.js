import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginSuccess} from '../../redux/userRedux';
import '../Register/Register.css';

const Login = () => {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(null);

    const style = {
        width: "25%",
        padding: "15px"
    }
    

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email,password})
            });
            if (data.status === 405) {
                const result = await data.json();
                setErrMsg(result)
            } else {
                setErrMsg(null);
                const { userData, token } = await data.json();
                dispatch(loginSuccess({email:userData.email, username: userData.username,_id:userData._id,token}))
                navigate('/')
            }
    
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="register-container">
            <div style={style} className="register-wrapper">
                <h1>SIGN IN</h1>
                <form onSubmit={ onSubmit } action="">
                    <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" />
                    <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
                    <button>LOGIN</button>
                    <span style={{'color':'red'}}>

                    { errMsg ? errMsg.map((el, index) => <p key={ index}>{ el }</p> ) : <p></p>}
                    </span>

                    <span></span>
                    <Link  to="/login"> If you are forget your password, please make a new account.</Link>
                </form>
            </div>
        </div>

    );
}

export default Login;