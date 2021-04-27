import React, { useEffect, useState } from 'react';
import Instructions from './Instructions';

function RecipeDetails( {match} ) {
    const [recipe, setRecipe] = useState([]);

    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes",
        tags : "",
        number : 9,
        id : match.params.id
    };

    useEffect( () => {
        function fetchRecipe() {
            const url = `${searchOptions.baseURL}/${searchOptions.id}/information?apiKey=${searchOptions.key}`
            
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setRecipe(data);
                })
                .catch(console.error);
        }
        fetchRecipe()
    }, []);

    return (
        <div className="details-container">
            <h1>{recipe.title}</h1>
            
            <div className="Summary">
                {recipe.summary}
            </div>

            <div className="container">
                <img src={recipe.image} alt={recipe.title} />
                
                <div className="Ingredients">
                    <p>ingredients</p>
                </div>
            </div>
            
            <div className="Directions">
                {recipe.instructions}
            </div>
            
        </div>
    );
}

export default RecipeDetails;