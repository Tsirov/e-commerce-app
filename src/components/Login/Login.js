import '../Register/Register.css';




const Register = () => {
    const style = {
        width: "25%",
        padding: "15px"
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e);
        const name = formData.get("name");
        const password = formData.get("password");


    }

    return (
        <div className="register-container">
            <div style={style} className="register-wrapper">
                <h1>SIGN IN</h1>
                <form onSubmit={ onSubmit } action="">
                    <input name="name" type="text" />
                    <input  name="password" type="text" />
                    <button>LOGIN</button>
                    <a  href="#"> If you are forget your password, please make a new account.</a>
                </form>
            </div>
        </div>

    );
}

export default Register;