//import '../App.css';
import { useState, useEffect } from 'react/cjs/react.development';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer.js';
import '../styles/Layout.css'


const App = () => {
  // keep the cart even if the page is refreshed
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart 
          cart={cart}
          updateCart= {updateCart} />
        <ShoppingList 
          cart={cart}
          updateCart= {updateCart} 
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
