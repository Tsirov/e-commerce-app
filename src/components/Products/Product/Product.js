import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addProduct } from '../../../redux/cartRedux';
import './Product.css';

const Product = ({ element }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.currentUser)

    const clickAddHandler = () => {

        if (Object.keys(user).length <= 0) {
            navigate('/login')
        }
        dispatch(addProduct({ ...element, quantity: 1 }));
    }

    return (
        <div className='product-container'>
            <span className='product-category'>Category:
                { element.category.toLowerCase() == 'white'
                    ? <span>White</span>
                    : <span> { element.category }</span>
                }
               </span>
            <img className="product-img" src={ element.img } alt="" />
            <div className="product-info" >
                <div onClick={ clickAddHandler } className="product-icon">
                    <AiOutlineShoppingCart />
                </div>
                <Link to={ `/product/${element._id}` }  >
                    <div className="product-icon" >
                        <AiOutlineSearch />

                    </div>
                </Link>
                {/* <div className="product-icon">
                    <AiOutlineHeart />
                </div> */}
            </div>
            <div className="product-user">
                <span> Price: { element.price } lv.  Size: { element.size } </span>
            </div>
        </div>
    );
}

export default Product;