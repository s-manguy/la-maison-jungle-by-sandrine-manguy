import '../styles/Categories.css'

const Categories = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <div 
            className='lmj-categories' 
            aria-labelledby="categories-selector"
        > {/* added aria-label for accessibility reasons */}
            <select 
                name="categories" 
                id="categories-selector"
                className='lmj-categories-select'
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >{/* added name */}
                <option value="">---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            
            <button onClick={() => setActiveCategory('')}> Réinitialiser</button>
        </div>

    )

}







export default Categories