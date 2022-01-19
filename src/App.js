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
            {/* <Slider />
            <Categories />
            <Products />
            <Newsletter/> */}

            {/* <ProductList/> */ }
            

            {/* <ProductPage/> */ }
            

          {/* <Register/>  */}
            

            {/* <Login/> */ }
            

            <Cart/>
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
