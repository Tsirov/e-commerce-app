import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './MyProducts.css';

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        const getElement = async () => {
            try {
                const data = await fetch(`http://localhost:5000/api/products/owner/${user._id}`);
                const result = await data.json();
                setProducts(result)

            } catch (err) {
                console.log(err)
            }
        }
        getElement();
    }, [])

    return (
        <div className="my-Product-container">

            { products.length > 0
                ? products.map((product, index) => {
                    return (
                        <div key={ index } className='product-container'>
                            <span className='product-category'>Category:{ product.category }</span>
                            <img className="product-img" src={ product.img } alt="" />

                            <div className="product-user">
                                { true
                                    ? <><Link to={ `/edit/${product._id}` }>
                                        <button>Edit</button>
                                    </Link>
                                        
                                        <Link to={ `/product/${product._id}` }>
                                            <button>Details</button>
                                        </Link>
                                    </>
                                    : <>
                                        <span> Price: { product.price } lv. </span>
                                        <Link to={ `/product/${product._id}` }>
                                            <button>Details</button>
                                        </Link>
                                    </>
                                }
                            </div>

                        </div>
                    )
                })
                : <h1 className="myProducts-h1" > No products in your list.</h1> }
        </div>
    )
}


export default MyProducts;