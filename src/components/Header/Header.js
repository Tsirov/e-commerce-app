import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';

import { logoutSuccess } from '../../redux/userRedux';
import { clearProduct } from '../../redux/cartRedux';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const [clickMenu, setClickMenu] = useState(false);
    const [displayView, setDisplayView] = useState('none');
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
        dispatch(clearProduct());

    }

    let userNavigation = () => {
        if (user) {
            return (
                <article className="navbar-user-dashboard">
                    <Link style={ { "color": "white" } } to="/cart">
                        <Badge badgeContent={ quantity } color="primary" className="navbar-car">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                    <span style={{marginRight: '20px'}}>Welcome, { user.username }</span>
                    <article className="navbar-menu">
                        <MenuIcon onClick={ () => displayView === 'none' ? setDisplayView('flex') : setDisplayView('none') } />
                        <div className="user-tablet" style={ displayView === 'none' ? {display: 'none'} : {display: 'flex'}}>
                            <span style={ { "marginLeft": "10px" } } ></span >
                            <Link className="nav-button" to="/myProducts" onClick={ () => setDisplayView('none') }>My Products</Link>
                            <Link className="nav-button" to="/create" onClick={() => setDisplayView('none') } >Add Product</Link>
                            <Link  className="nav-button" to="/" onClick={ () => { logoutHandler(); setDisplayView('none') }  }>Logout</Link>
                        </div>
                    </article>
                    <div id="user">

                        <Link className="nav-button" to="/myProducts">My Products</Link>
                        <Link className="nav-button" to="/create">Add Product</Link>
                        <Link onClick={ logoutHandler } className="nav-button" to="/">Logout</Link>
                    </div>
                </article>

            )

        }
    }




    return (

        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className='header-content'>
                        <Link to="/">Dashboard</Link>
                        <Link to="/products">All Products</Link>
                    </div>

                    {/* <div className="search-div">
                        <input type="search" placeholder="What are you looking..." ></input>
                        <button className="buttonIcon"><AiOutlineSearch className="icon" /></button>

                    </div> */}

                    {/* <i className="em em-search"></i> */ }

                    { user && user.email
                        ? userNavigation()
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;

