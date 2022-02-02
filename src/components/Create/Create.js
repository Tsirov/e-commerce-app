import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Create.css';


const Create = () => {
    const [element, setElement] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.currentUser);

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const product = {
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
            const data = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            if (data.status === 405) {
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

    return (
        < >
            <h1 style={ { "textAlign": "center" } }>
                Create
            </h1>
            <div className="create-form">
                <form onSubmit={ submitHandler } >

                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="name">
                        Description
                    </label>
                    <textarea id="name" name="description"></textarea>
                    <label htmlFor="image"> ImageUrl</label>
                    <input type="text" id="img" name="img" />
                    <label > Price</label>
                    <input type="text" id="price" name="price" />
                    <label htmlFor="difficulty">
                        Collection: { element }
                    </label>
                    <select name="collection" defaultValue="default">
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
                    <select name="category" defaultValue="default">
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
                        <option value="new">
                            New
                        </option>
                    </select>

                    <label htmlFor="difficulty">
                        Color: { element }
                    </label>
                    <select name="color" defaultValue="default">
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
                        <option value="pink">
                            Pink
                        </option>
                    </select>

                    <label htmlFor="difficulty">
                        Size: { element }
                    </label>
                    <select name="size" defaultValue="default">
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

export default Create;

