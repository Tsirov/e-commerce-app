import {useLocation } from 'react-router-dom';

import './ProductList.css';
import Products from '../Products';
import Newsletter from '../Newsletter';
import { useState } from 'react';

const products = [
    {
        id: 1,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    },
    {
        id: 3,
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
        id: 4,
        img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    },
    {
        id: 5,
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
        id: 6,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
        id: 7,
        img: "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
    },
    {
        id: 8,
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
];

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');
    console.log(cat);

    const filterHandler = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    };


    return (
        <div className="product-list-container">
            <h1 style={{margin: "20px"}}>{cat}</h1>
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