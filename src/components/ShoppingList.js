import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

const ShoppingList = ({ cart, updateCart }) => {
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
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isBestSale, isSpecialOffer, price }) => (
                    <div key={id}>
                        <PlantItem 
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            isBestSale={isBestSale}
                            isSpecialOffer={isSpecialOffer}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                 ))}     
                 
            </ul>
        </div>
        
    )
}

export default ShoppingList