import { useLocation } from 'react-router-dom';

import './Product.css';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';




const Product = ({ element }) => {
    // const location = useLocation();
    // const cat = location.pathname.split('/')[2];

    return (

        <div className='product-container'>
            <img className="product-img" src={element.img} alt="" />
            <div className="product-info" >
                <div className="product-icon">
                    <AiOutlineShoppingCart/>
                </div>
                <div className="product-icon">
                    {/* <Link to={`/product/${element._id}`} */}
                    <AiOutlineSearch/>
                </div>
                <div className="product-icon">
                    <AiOutlineHeart/>
                </div>
            </div>
        </div>


    );
}

export default Product;