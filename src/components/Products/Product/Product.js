import './Product.css';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";




const Product = ({ element }) => {
    

    return (

        <div className='product-container'>
            <img className="product-img" src={element.img} alt="" />
            <div className="product-info" >
                <div className="product-icon">
                    <AiOutlineShoppingCart/>
                </div>
                <div className="product-icon">
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