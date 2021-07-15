import React, { useContext } from 'react';
import { FilterContext } from '../FilterContext'
import './Sidebar.css'

function Sidebar( ) {
    // useContext to pass the tags from the sidebar component to the recipe details component.
    const { tags, setTags } = useContext(FilterContext);

    const cuisines = [
        'african',
        'american',
        'chinese',
        'european',
        'french',
        'german',
        'indian',
        'japenese',
        'mexican',
        'thai',
    ];

    const diets = [
        'vegetarian',
        'pescetarian',
        'vegan',
        'ketogenic',
        'paleo',
        'primal',
        'whole30',
    ];

    const intolerances = [
        'dairy',
        'egg',
        'gluten',
        'grain',
        'peanut',
        'seafood',
        'sesame',
        'shellfish',
        'soy',
        'sulfite',
        'tree Nut',
        'wheat',
    ];

    const toggleCheckbox = (e) => {
        if (e.target.id === 'cuisine') {
            if (tags.cuisine.has(e.target.value)) {
                tags.cuisine.delete(e.target.value);
            } else {
                tags.cuisine.add(e.target.value);
            }
        }
        if (e.target.id === 'diet') {
            tags.diet = e.target.value;
        }
        if (e.target.id === 'intolerance') {
            if (tags.intolerances.has(e.target.value)) {
                tags.intolerances.delete(e.target.value);
            } else {
                tags.intolerances.add(e.target.value);
            }
        }
    }

    // useEffect(() => {
    //     toggleCheckbox();
    // })

    return (
        <div>  
            <h5>Diet Regime</h5>
            <div className="filter-container">
                {diets.map(diet => (
                    <div className="checkbox">
                        <label>
                            <input
                                type="radio"
                                name="choice"
                                id='diet'
                                value={diet}
                                // checked={isChecked}
                                onChange={toggleCheckbox}
                            />
                        {diet}
                        </label>
                    </div> 
                ))}              
            </div>
            <h5>Dietary Intolerances</h5>
            <div className="filter-container">
                {intolerances.map(intolerance => (
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="choice"
                                id='intolerance'
                                value={intolerance}
                                // checked={isChecked}
                                onChange={toggleCheckbox}
                            />
                        {intolerance}
                        </label>
                    </div> 
                ))}              
            </div>     
            <h5>Cuisine</h5>
            <div className="filter-container">
                {cuisines.map(cuisine => (
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="choice"
                                id='cuisine'
                                value={cuisine}
                                // checked={isChecked}
                                onChange={toggleCheckbox}
                            />
                        {cuisine}
                        </label>
                    </div> 
                ))}              
            </div>
        </div>
    );
}

export default Sidebar;