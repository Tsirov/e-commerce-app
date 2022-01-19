import './Register.css';




const Register = () => {

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
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