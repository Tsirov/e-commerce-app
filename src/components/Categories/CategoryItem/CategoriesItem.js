import './CategoriesItem.css';

const CategoriesItem = ({ element }) => {
    return (

        <div className='categories-item-container'>
            <img src={ element.img } alt="" />
            <div className="categories-item-info">
                <h1 > { element.title }</h1>
                <button>SHOP NOW</button>
            </div>
        </div>


    );
}

export default CategoriesItem;