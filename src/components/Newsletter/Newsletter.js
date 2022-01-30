import { useNavigate } from 'react-router-dom';
import { AiOutlineSend } from "react-icons/ai";
import { useState } from 'react';

import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setEmail(e.target.value)
    }

    const clickHandler = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email})
        })

        console.log(data);
            if (data.status === 405) {
            console.log('405');
            let msg = await data.json();
            setErrorMsg(msg)
        }
        setEmail('')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="newsletter-container">
            <h1>Newsletter</h1>
            <div className="newsletter-description"> Get timely updates from your favorite products.</div>
            { errorMsg ? <span style={{'color':'red'}}>{ errorMsg }</span> : <span></span>}
            <div className="newsletter-input-container">
                <input onChange={changeHandler} placeholder="Your email"  value={email }/>
                <button onClick={clickHandler}>
                    <AiOutlineSend/>
                </button>
            </div>
        </div>
    );
}

export default Newsletter;

