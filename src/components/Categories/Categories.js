
import CategoriesItem from './CategoryItem';

import './Categories.css';

const categories = [
    {
      id: 1,
      img: "https://lureurban.in/image/cache/catalog/gallery/women-jacket-sky-blue-600x750.jpg",
        title: "JACKETS",
        category:'jacket'
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/61MUq-G2iOL._AC_UX342_.jpg",
        title: "DRESS",
        category:'dress'
    },
    {
      id: 3,
      img: "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPDEEPMAYRA-COAMAY1171815AC97DD5D/1610629133719_0..jpg?imwidth=320&impolicy=hq",
        title: "T-SHIRT",
      category:'t-shirt'
    },
  ];

const Categories = () => {
    return (

        <div className='categoriesContainer'>
            { categories.map(el =>(
                <CategoriesItem key={el.id} element={ el } />)) }
        </div>


    );
}

export default Categories;

