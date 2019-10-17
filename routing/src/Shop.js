import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();

        console.log(items);
        setItems(items.items);
    };
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.itemid}>
                        <Link to={`/shop/${item.itemid}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shop;
