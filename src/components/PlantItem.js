import CareScale from "./CareScale";
import '../styles/PlantItem.css'

const handleClick = (plantName) => {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix !`)
}


const PlantItem = ({ cover, name, water, light, id, isBestSale, isSpecialOffer, price }) => {
    {/* id, isBestSale & isSpecialOffer props added to keep the key attribute and the offers to complete the original course project */}
    return (
        <li 
            key={id} 
            className='lmj-plant-item' 
            onClick={ () => handleClick(name) }
        > {/* added key and name as props in the handleClick function*/}
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div>
                {name}
                {' '}
                {isBestSale && <span>🔥</span>}
            </div> 
            {/* isBestSale condition kept --> added div to contain name and info in one line <--> flex column css rule
                {' '} added to obtain more space between name and icon */}
            <div>
                <CareScale careType='water'scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
            {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}{/* isSpecialOffer condition kept --> modify the css code to keep it on the plant cover */}
        </li>
    )
}


export default PlantItem