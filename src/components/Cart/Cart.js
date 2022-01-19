import './Cart.css';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



const Cart = () => {

   
    return (
        <div style={{padding:"20px"}} className="cart-wrapper">
            <h1 >YOUR BAG</h1>
            <div className="cart-top">
                <button>CONTINUE SHOPPING</button>
                <span>Shopping Bag(2)</span>
                <span>Your Wishlist (0)</span>
                <button type="filled">CHECKOUT NOW</button>
            </div>
            <div className="cart-bottom">
                <div  className="cart-info">
                    <div className="cart-product">
                        <div className="cart-product-details" >
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                            <div className="cart-details" >
                                <span>
                                    <b>Product:</b>JESSIE THUNDER SHOES
                                </span>
                                <span>
                                    <b>ID:</b>93813718293
                                </span>
                                <div className="cart-product-color" style={ { color: "black" } }></div>
                                <span>
                                    <b>Size</b>37.5
                                </span>
                            </div>
                        </div>
                        <div className="cart-product-price-details" >
                            <div className="cart-product-counter">
                                <AiOutlinePlus />
                                <div>2</div>
                                <AiOutlineMinus />
                            </div>
                            <div className="cart-product-final-price">$ 30</div>
                        </div>
                    </div>
                    <hr className="cart-product-hr" />
                    <div className="cart-product">
                        <div className="cart-product-details" >
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                            <div className="cart-details" >
                                <span>
                                    <b>Product:</b>HAKURA T-SHIRT
                                </span>
                                <span>
                                    <b>ID:</b>93813718293
                                </span>
                                <div className="cart-product-color" style={ { color: "gray" } }></div>
                                <span>
                                    <b>Size</b>M
                                </span>
                            </div>
                        </div>
                        <div className="cart-product-price-details" >
                            <div className="cart-product-counter">
                                <AiOutlinePlus />
                                <div>1</div>
                                <AiOutlineMinus />
                            </div>
                            <div className="cart-product-final-price">$ 30</div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-summary" >
                    <h1 >ORDER SUMMARY</h1>
                    <div className="cart-product-summary-item">
                        <span>Subtotal</span>
                        <span>$ 80</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Estimated Shipping</span>
                        <span>$ 5.90</span>
                    </div>
                    <div className="cart-product-summary-item">
                        <span>Shipping Discount</span>
                        <span>$ -5.90</span>
                    </div>
                    <div className="cart-product-summary-item" type="total">
                        <span>Total</span>
                        <span>$ 80</span>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>

            </div>

        </div>);
}

export default Cart;