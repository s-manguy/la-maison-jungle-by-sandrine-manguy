import { useState, useEffect } from "react";
import '../styles/Cart.css'

const Cart = ({ cart, updateCart }) => {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
            (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
        alert(`Montant du panier actualisé : ${total}€`)
    }, [total]) // test : is it possible to write more than one effect in the same use effect ? YES !
    //useEffect(() => {
    //    alert(`Montant du panier actualisé : ${total}€`)
    //}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
               <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key= {`${name}-${index}`}>
                             {name} {price}€ * {amount}
                            </div>
                        ))} 
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
               </div> 
            ) : (
                <div>Votre panier est vide</div>
            )}
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

