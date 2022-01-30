import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import './ProductPage.css';
import { addProduct } from '../../redux/cartRedux';

const ProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const user = useSelector(state => state.user.currentUser);


    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetch('http://localhost:5000/api/products/find/' + id);
                const result = await data.json();
                setProduct(result);
            } catch (e) {
                console.log(e);
            }
        }
        getProduct();
    }, []);

    const clickHandler = (command) => {
        if (command === 'decrease') {
            quantity > 1 && setQuantity(quantity - 1)
        } else if (command === 'increase') {
            setQuantity(quantity + 1)
        }
    }

    const deleteHandler = async (id) => {
        try {
            const data = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

        
    const clickAddHandler = () => {
        
        dispatch(addProduct({ ...product, quantity}));
    }

    return (
        Object.keys(product) == 0
            ? <h1>Loading...</h1>
            : <div className='product-page-wrapper'>
                <div style={ { flex: 1 } }>
                    <img src={ product.img } alt="" />
                </div>
                <div className='product-page-info-container'>
                    <h1 style={ { "fontWeight": 200 } }></h1>
                    <p style={ { "margin": "20px 0px" } }>
                        { product.description }
                    </p>
                    <span>$ { product.price * quantity }</span>

                    <div className='product-page-filter-container'>
                        <div>
                            <span>Color</span>
                            <div className='product-page-color' style={ { "backgroundColor": (product.color && product.color.toLowerCase()) } }></div>
                            {/* <div className='product-page-color' style={ { "backgroundColor": "darkblue" } }></div>
                            <div className='product-page-color' style={ { "backgroundColor": "gray" } }></div> */}
                        </div>
                        <div>
                            <span>Size: { product.size && product.size.toUpperCase() }</span>
                            {/* <select className='product-page-select' name="" id="">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select> */}
                        </div>
                    </div>
                    <div className='product-page-add-container'>
                        { user._id === product.ownerId
                            ?
                            <div style={ { 'display': '50%' } }>
                                <button onClick={ () => deleteHandler(product._id) } style={ { 'width': '60px', 'marginLeft': '12px' } }> Delete</button>
                                <Link to={`/edit/${product._id}`}>
                                    <button style={ { 'width': '60px', 'marginLeft': '12px' } }> Edit</button>
                                </Link>
                            </div>

                            :
                            <>
                                <div className='product-page-amount-container'>

                                    <button onClick={ () => clickHandler("decrease") }><AiOutlineMinus /></button>
                                    <span>{ quantity }</span>
                                    <button onClick={ () => clickHandler("increase") }><AiOutlinePlus /></button>
                                </div>
                                <button onClick={clickAddHandler}> ADD TO CART</button>
                            </>
                        }

                    </div>
                </div>
            </div>

    );
}

export default ProductPage;