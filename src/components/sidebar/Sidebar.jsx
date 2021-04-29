import React, { useState, useEffect } from 'react';

function Sidebar( {handleClick, handleFilter} ) {
    const [selectedCuisines] = useState(new Set());
    const cuisines = [
        'African',
        'American',
        'Chinese',
        'European',
        'French',
        'German',
        'Indian',
        'Japenese',
        'Mexican',
        'Thai',
    ];

    const toggleCheckbox = (cuisine) => {
        if (selectedCuisines.has(cuisine)) {
            selectedCuisines.delete(cuisine);
        } else {
            selectedCuisines.add(cuisine);
        }
        console.log(selectedCuisines)
    }

    useEffect(() => {
        toggleCheckbox();
    })

    return (
        <div>
            <h4>Filtering Options</h4>
            <button type="button" >FILTER</button>
            <button type="button">CLEAR</button>
            
            <h5>Cuisine</h5>
            <form onClick={handleFilter}>
                {cuisines.map(cuisine => (
                    <div className="checkbox">
                        <label>
                            <input
                            type="checkbox"
                            name="choice"
                            id={cuisine}
                            value={cuisine}
                            // checked={isChecked}
                            onChange={toggleCheckbox(cuisine)}
                            />
                        {cuisine}
                        </label>
                    </div> 
                ))}

              
            </form>

            <h5>Diet Regime</h5>
            <form>
                <input type="checkbox" name="choice" id="diet" value="gluten free" onClick={handleClick}/>Gluten Free<br></br>
                <input type="checkbox" name="choice" id="diet" value="ketogenic" onClick={handleClick}/>Ketogenic<br></br>
                <input type="checkbox" name="choice" id="diet" value="vegetarian" onClick={handleClick}/>Vegetarian<br></br>
                <input type="checkbox" name="choice" id="diet" value="lacto-vegetarian" onClick={handleClick}/>Lacto-Vegetarian<br></br>
                <input type="checkbox" name="choice" id="diet" value="ovo-vegetarian" onClick={handleClick}/>Ovo-Vegetarian<br></br>
                <input type="checkbox" name="choice" id="diet" value="vegan" onClick={handleClick}/>Vegan<br></br>
                <input type="checkbox" name="choice" id="diet" value="pescatarian" onClick={handleClick}/>Pescatarian<br></br>
                <input type="checkbox" name="choice" id="diet" value="paleo" onClick={handleClick}/>Paleo<br></br>
                <input type="checkbox" name="choice" id="diet" value="primal" onClick={handleClick}/>Primal<br></br>
                <input type="checkbox" name="choice" id="diet" value="whole30" onClick={handleClick}/>Whole 30
            </form>
            <h5>Dietary Restrictions</h5>
            <form>
                <input type="checkbox" name="choice" id="intolerance" value="dairy" onClick={handleClick}/>Dairy<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Egg" onClick={handleClick}/>Egg<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Gluten" onClick={handleClick}/>Gluten<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Peanut" onClick={handleClick}/>Peanut<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Seafood" onClick={handleClick}/>Seafood<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Sesame" onClick={handleClick}/>Sesame<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Shellfish" onClick={handleClick}/>Shellfish<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Soy" onClick={handleClick}/>Soy<br></br>
                <input type="checkbox" name="choice" id="intolerance" value="Tree Nut" onClick={handleClick}/>Tree Nut
            </form>
        </div>
    );
}

export default Sidebar;