import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from 'react-redux';

import { decreaseProduct, increaseProduct,clearProduct } from '../../redux/cartRedux';
import './Cart.css';

const KEY = process.env.REACT_APP_PUBLIC_KEY;

const Cart = () => {
    const dispatch = useDispatch();
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    const clickHandler = (command, index) => {
        if (command === 'increase') {
            dispatch(increaseProduct({ index }))
        } else {
            dispatch(decreaseProduct({ index }))
        }
        console.log(command, index);
    };

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {

            const body = {
                tokenId: stripeToken.id,
                amount: (cart.total < 100 ? cart.total + 5.9 : cart.total) * 100
            };

            try {
                const response = await fetch('http://localhost:5000/api/ckeckout/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                })
                dispatch(clearProduct());
                navigate('/success')
            } catch (err) {
                console.log(err);
            }
        };

        stripeToken && makeRequest();
        
    },[stripeToken])

    return (
        <div style={ { padding: "20px" } } className="cart-wrapper">
            <h1 >YOUR BAG</h1>
            <p >If you bay something over $ 100  the shipping will be free.</p>
            <div className="cart-top">
                <Link to="/products">
                    <button>CONTINUE SHOPPING</button>
                </Link>
                <span>Shopping Bag({ cart.quantity })</span>
                {/* <span>Your Wishlist (0)</span> */ }
                <button >CHECKOUT NOW</button>
            </div>

            <div className="cart-bottom">
                <div className="cart-info">
                    { cart.products.map((product, index) => (
                        <div key={ index }>
                            <div className="cart-product">
                                <div className="cart-product-details" >
                                    <img style={ { 'width': '200px' } } src={ product.img } alt="" />
                                    <div className="cart-details" >
                                        <span>
                                            <b>Product:</b>{ product.title }
                                        </span>
                                        <span>
                                            <b>ID:</b>{ product._id }
                                        </span>
                                        <span className="cart-product-color-wrapper">
                                            <span>
                                                Color:
                                            </span>
                                            { product.color.toLowerCase() == 'white'
                                                ? <span>White</span>
                                                : <div className="cart-product-color" style={ { backgroundColor: product.color } }></div>
                                            }


                                        </span>
                                        <span>
                                            <b>Size</b>{ product.size }
                                        </span>
                                    </div>
                                </div>
                                <div className="cart-product-price-details" >
                                    <div className="cart-product-counter">
                                        <button onClick={ () => clickHandler('decrease', index) } >
                                            <AiOutlineMinus />
                                        </button>

                                        <div>{ product.quantity }</div>
                                        <button onClick={ () => clickHandler('increase', index) }>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                    <div className="cart-product-final-price">$ { product.price * product.quantity }</div>
                                </div>

                            </div>
                            <hr className="cart-product-hr" />
                        </div>
                    )) }
                </div>

                <div className="cart-product-summary" >
                    <h1 >ORDER SUMMARY</h1>
                    <div className="cart-product-summary-item">
                        <span>Subtotal</span>
                        <span>$ { cart.total }</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Estimated Shipping</span>
                        <span>$ 5.90</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Shipping Discount</span>
                        <span> $ { cart.total > 100 ? '-5.90' : '0.00' }</span>
                    </div>
                    <div className="cart-product-summary-item" >
                        <span style={ { fontWeight: 600 } }>Total</span>
                        <span style={ { fontWeight: 600 } }>$ { cart.total < 100 ? cart.total + 5.9 : cart.total }</span>
                    </div>

                    <StripeCheckout
                        name='My Said'
                        billingAddress
                        shippingAddress
                        description={ `Your totl is ${cart.total < 100 ? cart.total + 5.9 : cart.total} лв.` }
                        amont={ (cart.total < 100 ? cart.total + 5.9 : cart.total) * 100 }
                        token={ onToken }
                        stripeKey={ KEY }
                    >
                        <button>CHECKOUT NOW</button>
                    </StripeCheckout>

                </div>

            </div>

        </div>);
}

export default Cart;