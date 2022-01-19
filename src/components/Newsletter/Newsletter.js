import { Link } from 'react-router-dom';
import { AiOutlineSend } from "react-icons/ai";

import './Newsletter.css';

// import { useAuthContext } from '../../contexts/AuthContext';

const Newsletter = () => {
    

    return (
        <div className="newsletter-container">
            <h1>Newsletter</h1>
            <div className="newsletter-description"> Get timely updates from your favorite products.</div>
            <div className="newsletter-input-container">
                <input placeholder="Your email" />
                <button>
                    <AiOutlineSend/>
                </button>
            </div>

        </div>

    );
}

export default Newsletter;

