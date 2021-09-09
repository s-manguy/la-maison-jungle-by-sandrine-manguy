/*
import '../styles/Cart.css'

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const fleursPrice = 15;
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monsterra : {monsteraPrice}€</li>
                <li>lierre : {lierrePrice}€</li>
                <li>Monsterra : {fleursPrice}€</li>
            </ul>
             Total : { monsteraPrice + lierrePrice + fleursPrice }€
        </div>
    )
}

export default Cart
*/

import { useState } from "react";
import '../styles/Cart.css'

const Cart = ({ cart, updateCart }) => {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key= {`${name}-${index}`}>
                    {name} {price}€ * {amount}
                </div>
            ))}
            
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                 Ouvrir le panier
            </button>
        </div>
 
    )
}

export default Cart

