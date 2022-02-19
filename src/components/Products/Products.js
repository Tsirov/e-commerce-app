import { useEffect, useState } from 'react';

import Product from './Product';
import './Products.css';

const Products = ({ cat, filters, sort }) => {
    let [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetch(cat ? `https://my-server-app-react.herokuapp.com/products?category=${cat}` : `https://my-server-app-react.herokuapp.com/api/products`);
                // const data = await fetch(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`);
                let result = await data.json();
                setProducts(result)
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();

    }, []);

    useEffect(() => {
        if (Object.keys(filters).length == 0) {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(
                products.filter((item) => {
                    return Object.entries(filters).every(([key, value]) => {
                        return (item[key.toLowerCase()].toLowerCase()).includes(value.toLowerCase());
                    })

                })
            );
        }
    }, [filters, products]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                )
            );
        } else if (sort === "low to hight") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <div className='categories-products'>
            { filteredProducts.map((product) => (
                <Product key={ product._id } element={ product } />
            ))
            }
        </div>
    );
}

export default Products;