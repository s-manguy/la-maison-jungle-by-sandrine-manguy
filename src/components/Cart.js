import { useState, useEffect } from "react";
import '../styles/Cart.css'

const Cart = ({ cart, updateCart, activeCategory, setActiveCategory }) => {
    // activeCategory & setActiveCategory have been put in this component in order to have the possibility to display an alert each time the category is changed
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
            (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
       // alert(`Montant du panier actualisé : ${total}€`) // this line have been commented because it is not a great UX !
    }, [total, activeCategory, setActiveCategory]) // test : is it possible to write more than one effect in the same use effect ? YES !
    //useEffect(() => {
    //    alert(`Montant du panier actualisé : ${total}€`)
    //}, [total])


   

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                <span className="material-icons md-48">close</span> {/* Replaced "Fermer" by an icon */}
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
                    <button 
                        title="Attention vous allez supprimer tout le panier !"
                        className='lmj-cart-remove-button'
                        onClick={() => updateCart([])}>
                        <span class="material-icons md-36">remove_shopping_cart</span> 
                        {' Vider le panier'} {/* Replaced "Vide le panier" by an icon  */}
                    </button>
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
                 <span class="material-icons size md-48" >shopping_cart</span>
                {' Voir le panier'} {/* Replaced Ouvrir by Voir */}
            </button>
        </div>
    )
}

export default Cart

