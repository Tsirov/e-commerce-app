import { Routes, Route } from 'react-router-dom';



import Header from './components/Header';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';


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


             


            </Routes>

            {/* 
            <Products />
            <Newsletter/> */}

            {/* <ProductList/> */ }


            {/* <ProductPage/> */ }

            {/* <Cart/> */ }
            {/* 
            <main id="site-content">
              <Routes>
                
              </Routes>
            </main>
 */}

            <footer id="site-footer">
                <p>@My said</p>
            </footer>
        </div>
    );
}

export default App;
