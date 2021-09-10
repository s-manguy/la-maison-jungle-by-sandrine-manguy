import '../styles/Categories.css'

const Categories = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <div 
            className='lmj-categories' 
            aria-labelledby="categories-selector"
        > {/* added aria-label for accessibility reasons */}
            <label 
                htmlFor="categories-selector"
                className='lmj-categories-label'
            >
                Sélectionnez une catégorie
            </label>
            <div>
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
                <button 
                    className="lmj-categories-button"
                    onClick={() => setActiveCategory('')}
                > 
                    Réinitialiser
                </button>
            </div>
            
        </div>

    )

}







export default Categories