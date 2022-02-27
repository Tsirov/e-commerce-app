import { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from  'react-loader-spinner'

import Product from './Product';
import './Products.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;


const Products = ({ category, filters, sort }) => {
    let [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetch(category ? `${BASE_URL}/products?category=${category}&p=${page}` : `${BASE_URL}/api/products?&p=${page}`);
                let result = await data.json();
                if (result.maxPage > maxPage) {
                    setMaxPage(result.maxPage);
                }

                setProducts(result.products)
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();

    }, [category, page]);

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
            setFilteredProducts((prev) => {
                
                return [...prev].sort((a, b) =>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            }
                
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
    }, [sort,products]);

    const pageHandler = (event) => {
        if (event === 'previous') {
            if (page <= 1) {
                return;
            } else {
                setPage(page - 1);
            }
        } else if (event === 'next') {
            setPage(page + 1);


        }
    }

    return (
        <section className="products-categories-wrapper ">
            { products.length === 0
                ?
                <article className='products-categories-loader'>
                    <h1>Loading</h1>
                    <BallTriangle />
                </article>
                
                :
                <section>
                    <article className='categories-products'>
                        { filteredProducts.map((product) => (
                            <Product key={ product._id } element={ product } />
                        ))
                        }

                    </article>
                    <article className='categories-products-buttons'>
                        { page <= 1 ? '' : <button onClick={ () => pageHandler('previous') }>Previous</button> }
                        <p>{ page }</p>
                        { maxPage <= page ? '' : <button onClick={ () => pageHandler('next') }>Next</button> }
                    </article>

                </section >
            }
        </section>



    );
}

export default Products;