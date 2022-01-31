import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';



import Header from './components/Header';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Create from './components/Create';
import MyProducts from './components/MyProducts';
import Edit from './components/Edit';
import ServerIsNotWorking from './components/404/ServerIsNotWorking';
import { useSelector } from 'react-redux';


function App() {
    const user = useSelector((state) => state.user.currentUser)
    console.log(user);
    // const Navigate = useNavigate();
    return (

        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Slider />
                        <Categories />
                        <Newsletter />
                    </>
                } />

                <Route path="/products/*" exact="true" element={ <ProductList /> } />

                { user && Object.keys(user).length > 0 ?
                    <>
                        <Route path="/create" element={ <Create /> } />
                        <Route path="/myProducts" element={ <MyProducts /> } />
                        <Route path="/edit/*" element={ <Edit /> } />
                        <Route path="/cart" element={ <Cart /> } />
                        <Route path="/register" element={ <Navigate replace to="/" /> } />
                        <Route path="/login" element={ <Navigate replace to="/" /> } />

                    </>
                    :
                    <>
                        <Route path="/create" element={ <Navigate replace to="/login" /> } />
                        <Route path="/myProducts" element={ <Navigate replace to="/login" /> } />
                        <Route path="/edit/*" element={ <Navigate replace to="/login" /> } />
                        <Route path="/cart" element={ <Navigate replace to="/login" /> } />
                        <Route path="/register" element={ <Register /> } />
                        <Route path="/login" element={ <Login /> } />
                    </>
                }

                <Route path="/product/:id" exact="true" element={ <ProductPage /> } />

                <Route path="/404" element={ <ServerIsNotWorking /> } />
            </Routes>
            <footer id="site-footer">
                <p>@My said</p>
            </footer>
        </div>
    );
}

export default App;
