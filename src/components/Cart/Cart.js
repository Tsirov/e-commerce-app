import { useSelector } from 'react-redux';

import './Cart.css';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



const Cart = () => {
    const cart = useSelector((state) => state.cart)

    const style= {fontWeight: 600}
   
    return (
        <div style={{padding:"20px"}} className="cart-wrapper">
            <h1 >YOUR BAG</h1>
            <div className="cart-top">
                <button>CONTINUE SHOPPING</button>
                <span>Shopping Bag(2)</span>
                <span>Your Wishlist (0)</span>
                <button >CHECKOUT NOW</button>
            </div>
            <div className="cart-bottom">
                <div  className="cart-info">
                    { cart.products.map((product) =>(<div className="cart-product">
                        <div className="cart-product-details" >
                            <img src={product.img} alt="" />
                            <div className="cart-details" >
                                <span>
                                    <b>Product:</b>{product.title}
                                </span>
                                <span>
                                    <b>ID:</b>{product._id}
                                </span>
                                <div className="cart-product-color" style={ { backgroundColor: product.color } }></div>
                                <span>
                                    <b>Size</b>{product.size}
                                </span>
                            </div>
                        </div>
                        <div className="cart-product-price-details" >
                            <div className="cart-product-counter">
                                <AiOutlinePlus />
                                <div>{product.quantity}</div>
                                <AiOutlineMinus />
                            </div>
                            <div className="cart-product-final-price">$ {product.price * product.quantity}</div>
                        </div>
                    </div>))}
                    <hr className="cart-product-hr" />
                    
                </div>
                <div className="cart-product-summary" >
                    <h1 >ORDER SUMMARY</h1>
                    <div className="cart-product-summary-item">
                        <span>Subtotal</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Estimated Shipping</span>
                        <span>$ 5.90</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Shipping Discount</span>
                        <span>$ -5.90</span>
                    </div>
                    <div className="cart-product-summary-item" >
                        <span style={{fontWeight: 600}}>Total</span>
                        <span style={{fontWeight: 600}}>$ {cart.total}</span>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>

            </div>

        </div>);
}

export default Cart;