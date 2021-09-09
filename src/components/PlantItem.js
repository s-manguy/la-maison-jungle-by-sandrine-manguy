import CareScale from "./CareScale";
import '../styles/PlantItem.css'

const handleClick = (plantName) => {
   // console.log('Ceci est un clic')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`)
}


const PlantItem = ({ cover, name, water, light, id, isBestSale, isSpecialOffer }) => {
    return (
        <li 
            key={id} 
            className='lmj-plant-item' 
            onClick={ () => handleClick(name) }
        >
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div>
                {name}
                {' '}
                {isBestSale && <span>🔥</span>}
            </div>
            <div>
                <CareScale careType='water'scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
            {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
        </li>
    )
}

///// Personal modifications comments /////
/* 
// id, isBestSale & isSpecialOffer props added to keep the key attribute and the offers to complete the original course project.
// isSpecialOffer condition kept --> modify the css code to keep it on the plant cover
// isBestSale condition kept --> added div to contain name and info in one line <--> flex column css rule
// {' '} added to obtain more space between name and icon
*/



export default PlantItem