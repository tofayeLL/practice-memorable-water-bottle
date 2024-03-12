import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

import { addCartItemToLs, getStoredCart, removeFromLs } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";






const Bottless = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));

    }, [])

    useEffect(() => {
        console.log(bottles);
        if (bottles.length > 0) {
            const storedItemInLs = getStoredCart();
            let storedBottle = [];
            for (const id of storedItemInLs) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    storedBottle.push(bottle);
                }

            }

            setCart(storedBottle);
        }


    }, [bottles])


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addCartItemToLs(bottle.id)

    }


    const handleRemove = (id) => {
        const remainingCartItem = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCartItem);
        removeFromLs(id);
      
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>

            <div>

                <Cart 
                cart={cart}
                handleRemove={handleRemove}
                ></Cart>

            </div>

            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }

            </div>




        </div>
    );
};

export default Bottless;