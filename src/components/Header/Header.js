import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector,useDispatch } from 'react-redux';
import { logoutSuccess} from '../../redux/userRedux';



import './Header.css';


const Header = () => {
    const dispatch = useDispatch();
    let user = useSelector(state => state.user.currentUser);
    

    const quantity = useSelector(state => state.cart.quantity);

    let guestNavigation = (
        <div id="guest">
            <Link className="nav-button" to="/login">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
        </div>
    );

    const logoutHandler = () => {
        dispatch(logoutSuccess());
    }

    let userNavigation = (
        <div id="user">
            <Link style={ {"color": "white"} } to="/cart">
                <Badge badgeContent={ quantity } color="primary">
                    <ShoppingCartOutlined />
                </Badge>
            </Link>
            <span style={ { "marginLeft": "10px" } }></span >
            <span>Welcome, { user.username }</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link onClick={logoutHandler} className="button" to="/">Logout</Link>
        </div>
    );



    return (

        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    <div className="search-div">
                        <input type="search" placeholder="What are you looking..." ></input>
                        <button className="buttonIcon"><AiOutlineSearch className="icon" /></button>

                    </div>

                    {/* <i className="em em-search"></i> */ }

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

