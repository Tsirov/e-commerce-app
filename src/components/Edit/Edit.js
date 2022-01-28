import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';


import './Edit.css';


const Edit = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState([]);


    const [element, setElement] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const [collection, setCollection] = useState(null);
    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        const findProduct = async () => {
            try {
                const data = await fetch(`http://localhost:5000/api/products/find/${id}`);
                if (data.status === 405) {
                    const result = await data.json();
                    setErrMsg(result)
                } else {
                    const result = await data.json();
                    setProduct(result);
                    setErrMsg(null);
                }
    
            } catch (err) {
                console.log(err);
            }
        }
        findProduct();
    }, [])
    
    useEffect(() => { 
        setCategory(product.category) ;
        setCollection(product.collectionSeason);
        setColor(product.color) ;
        setSize(product.size) ;
    },[product])

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newProduct = {
            name: formData.get('name'),
            description: formData.get('description'),
            img: formData.get('img'),
            category: formData.get('category'),
            size: formData.get('size'),
            color: formData.get('color'),
            price: formData.get('price'),
            collectionSeason: formData.get('collection'),
            ownerId: user._id

        }

        try {
            const data = await fetch(`http://localhost:5000/api/products/${product._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });
            if (data.status === 405) {
                console.log('405',data, '++');
                const result = await data.json();
                setErrMsg(result)
            } else {
                setErrMsg(null);
                navigate('/')
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handleCategoryChange = (e) => { setCategory(e.target.value) };
    const handleCollectionChange = (e) => { setCollection(e.target.value) };
    const handleColorChange = (e) => { setColor(e.target.value) };
    const handleSizeChange = (e) => { setSize(e.target.value) };

    return (
        < >
            <h1 style={ { "textAlign": "center" } }>
                Edit
            </h1>
            <div className="create-form">
                <form onSubmit={ submitHandler } action="/create" method="POST">

                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" defaultValue={product.name }/>
                    <label htmlFor="name">
                        Description
                    </label>
                    <textarea id="name" name="description" defaultValue={product.description }></textarea>
                    <label htmlFor="image" > ImageUrl</label>
                    <input type="text" id="img" name="img" defaultValue={product.img }/>
                    <label > Price</label>
                    <input type="text" id="price" name="price" defaultValue={product.price }/>
                    <label htmlFor="difficulty">
                        Collection: { element }
                    </label>
                    <select name="collection"  value={collection}  onChange={handleCollectionChange} >
                        <option value="default" disabled>
                            Choose a collection:
                        </option>
                        <option value="summer">
                            Summer
                        </option>
                        <option value="winter">
                            Winter
                        </option>
                        <option value="new">
                            New
                        </option>
                    </select>

                    <label htmlFor="difficulty">
                        Category: { element }
                    </label>
                    <select name="category" value={category} onChange={handleCategoryChange}>
                        <option value="default" disabled>
                            Choose a category:
                        </option>
                        <option value="jacket">
                            Jacket
                        </option>
                        <option value="dress">
                            Dress
                        </option>
                        <option value="t-shirt">
                            T-shirt
                        </option>
                    </select>

                    <label htmlFor="difficulty">
                        Color: { element }
                    </label>
                    <select name="color"  value={color} onChange={handleColorChange}>
                        <option value="default" disabled>
                            Choose a color:
                        </option>
                        <option value="blue">
                            Blue
                        </option>
                        <option value="red">
                            Red
                        </option>
                        <option value="white">
                            White
                        </option>
                        <option value="black">
                            Black
                        </option>
                        <option value="yellow">
                            Yellow
                        </option>
                        <option value="green">
                            Green
                        </option>
                    </select>

                    <label htmlFor="difficulty">
                        Size: { element }
                    </label>
                    <select name="size" value={size } onChange={handleSizeChange}>
                        <option value="default" disabled>
                            Choose a size:
                        </option>
                        <option value="XS">
                            XS
                        </option>
                        <option value="S">
                            S
                        </option>
                        <option value="M">
                            M
                        </option>
                        <option value="L">
                            L
                        </option>
                        <option value="XL">
                            XL
                        </option>
                        <option value="XXL">
                            XXL
                        </option>
                    </select>
                    <span style={ { 'color': 'red' } }>

                        { errMsg ? errMsg.map((el, index) => <p key={ index }>{ el }</p>) : <p></p> }
                    </span>

                    <input type="submit" value="Create" />
                </form>
            </div>
        </>

    );
}

export default Edit;

