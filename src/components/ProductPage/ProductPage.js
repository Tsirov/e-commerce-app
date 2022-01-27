import { useLocation } from 'react-router-dom';


import './ProductPage.css';
import{AiOutlinePlus,AiOutlineMinus}  from "react-icons/ai";
import { useEffect, useState } from 'react';

const ProductPage = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [product, setProduct] = useState({});


    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetch('http://localhost:5000/api/products/find/' + id);
                const result = data.json();
                setProduct(result);
            } catch (e) {
                
            }
        }
        getProduct();
    })

    return (

        <div className='product-page-wrapper'>
            <div style={ { flex: 1 } }>
                <img src="https://sc02.alicdn.com/kf/Udae7968a93ad41a0b6a587395f1df8e39.jpg" alt="" />
            </div>
            <div className='product-page-info-container'>
                <h1 style={ { "font-weight": 200 } }></h1>
                <p style={ { "margin": "20px 0px" } }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </p>
                <span>$ 20</span>

                <div className='product-page-filter-container'>
                    <div>
                        <span>Color</span>
                        <div className='product-page-color' style={{"background-color": "black"}}></div>
                        <div className='product-page-color' style={ { "background-color": "darkblue" } }></div>
                        <div className='product-page-color' style={ { "background-color": "gray" } }></div>
                    </div>
                    <div>
                        <span>Size</span>
                        <select className='product-page-select' name="" id="">
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                </div>
                <div className='product-page-add-container'>
                    <div className='product-page-amount-container'>
                        <button><AiOutlineMinus/></button>
                        <span>1</span>
                        <button ><AiOutlinePlus/></button>
                    </div>
                    <button> ADD TO CART</button>
                </div>
            </div>
        </div>


    );
}

export default ProductPage;