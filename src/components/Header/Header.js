import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

import './Header.css';

// import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    let user = {}; //..........
    // const { user } = useAuthContext();

    let guestNavigation = (
        <div id="guest">
            <Link className="nav-button" to="/login">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, { user.email }</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (

        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    <div className="search-div">
                        <input type="search" placeholder="What are you looking..." ></input>
                        <button className="buttonIcon"><AiOutlineSearch className="icon" /></button>
                    
                    </div>
                    
                    {/* <i className="em em-search"></i> */}

                    { user.email
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>

    );
}

export default Header;

