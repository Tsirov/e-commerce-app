import { Routes, Route } from 'react-router-dom';



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


function App() {
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
                }/>
                <Route path="/register" element={ <Register/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/products/*" exact="true" element={ <ProductList/> } />
                <Route path="/product/:id" exact="true" element={ <ProductPage/> } />
                <Route path="/create" element={ <Create /> }/>
                <Route path="/myProducts" element={ <MyProducts /> }/>
                <Route path="/edit/*" element={ <Edit/> }/>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            <footer id="site-footer">
                <p>@My said</p>
            </footer>
        </div>
    );
}

export default App;
