import { useState } from 'react/cjs/react.development'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'


const ShoppingList = ({ cart, updateCart }) => {
    const [activeCategory, setActiveCategory] = useState('')
    // Function to obtain a list of the various categories in order to give the possibility to select one of them
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    // update cart controlling whether the current plant had already been added in the cart.
    const addToCart = (name, price) => {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 } // modified amount: currentPlantAdded + 1 from the original code which didn't run
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isBestSale, isSpecialOffer, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                         <div key={id}>
                            <PlantItem 
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                isBestSale={isBestSale}
                                isSpecialOffer={isSpecialOffer}
                                price={price}
                            /> {/* added isBestSale & isSpecialOffer to keep the information */}
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>   
                    ) : null
                 )}     
            </ul>
        </div>
    )
}

export default ShoppingList