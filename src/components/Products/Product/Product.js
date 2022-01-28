
import './Product.css';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';




const Product = ({ element }) => {
    // const location = useLocation();
    // const cat = location.pathname.split('/')[2];

    return (
        <div className='product-container'>
            <span className='product-category'>Category:{ element.category }</span>
            <img className="product-img" src={ element.img } alt="" />
            <div className="product-info" >
                <div className="product-icon">
                    <AiOutlineShoppingCart />
                </div>
                <div className="product-icon" >
                    <Link to={ `/product/${element._id}` }  >
                        <AiOutlineSearch />

                    </Link>
                </div>
                <div className="product-icon">
                    <AiOutlineHeart />
                </div>
            </div>
            <div className="product-user">
                <span> Price: {element.price} lv. </span>
                {/* <button>Edit</button>
                <button>Delete</button> */}
            </div>

        </div>
    );
}

export default Product;