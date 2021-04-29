import React, { useState, useEffect } from 'react';
import data from '../sample-json-files/ingredients.json'

function Ingredients( {recipeId} ) {
    const [ingredients, setIngredients] = useState([]);

    // const searchOptions = {
    //     key : process.env.REACT_APP_SPOONACULAR_KEY,
    //     baseURL : "https://api.spoonacular.com/recipes",
    //     id : recipeId
    // };

    function fetchIngredients() {
        setIngredients(data.ingredients);

        // const url = `${searchOptions.baseURL}/${searchOptions.id}/ingredientWidget.json?apiKey=${searchOptions.key}`
            
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         setIngredients(data.ingredients);
        //     })
        //     .catch(console.error);
    }

    useEffect( () => {
        fetchIngredients()
    }, []);

    return (
        <div className="ingredient-container">
            <h4>Ingredient List</h4>
            {ingredients.map(ingredient => (
                <ul>
                    <li>{ingredient.amount.us.value} {ingredient.amount.us.unit} {ingredient.name}</li>
                </ul>  
            ))}
        </div>
    )
    
}

export default Ingredients;