import {useLocation } from 'react-router-dom';

import './ProductList.css';
import Products from '../Products';
import Newsletter from '../Newsletter';
import { useState } from 'react';

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const filterHandler = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    };

    return (
        <div className="product-list-container">
            { cat ? <h1 style={ { margin: "20px" } }>{ cat.toLocaleUpperCase() } COLLECTION</h1> : '' }
            <div className="product-list-filter">
                <div  className="product-list">
                    <span>Filter Products:</span>
                    <select  onChange={filterHandler} name="color" id="" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                    <select onChange={filterHandler} name="size" id=""  defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="product-list">
                    <span>Sort Products:</span>
                    <select onChange={(e) => setSort(e.target.value)} name="featured" id="" defaultValue="Newest">
                    <option  value="newest">Newest</option>
                        <option value="low to hight">Prise: Low to Hight</option>
                        <option value="hight to low">Prise: Hight to Low</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
        </div>
    );
}

export default ProductList;