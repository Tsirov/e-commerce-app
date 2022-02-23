import { Link } from 'react-router-dom';

import './CategoriesItem.css';

const CategoriesItem = ({ element }) => {
    return (

        <div className='categories-item-container'>
            <img src={ element.img } alt="" />
            <div className="categories-item-info">
                <h1 > { element.title }</h1>
                <Link to={`/products?category=${element.category}`} >
                <button>SHOP NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default CategoriesItem;