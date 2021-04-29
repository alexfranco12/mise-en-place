import React, { useEffect, useState } from 'react';
import data from '../sample-json-files/Recipe.json'
import Ingredients from './Ingredients';

function RecipeDetails( {match} ) {
    const [recipe, setRecipe] = useState([]);

    // const searchOptions = {
    //     key : process.env.REACT_APP_SPOONACULAR_KEY,
    //     baseURL : "https://api.spoonacular.com/recipes",
    //     tags : "",
    //     number : 9,
    //     id : match.params.id
    // };

    
    function fetchRecipe() {
        setRecipe(data);

        // const url = `${searchOptions.baseURL}/${searchOptions.id}/information?apiKey=${searchOptions.key}`
            
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         setRecipe(data);
        //     })
        //     .catch(console.error);
    }

    useEffect( () => {
        fetchRecipe()
    }, []);

    return (
        <div className="details-container">
            <h1>{recipe.title}</h1>
            
            <p className="Summary" dangerouslySetInnerHTML={{__html: recipe.summary}}>
            </p>

            <div className="container">
                <img src={recipe.image} alt={recipe.title} />
                
                <div className="Ingredients">
                    <Ingredients recipeId={match.params.id} />
                </div>
            </div>
            
            <p className="Instructions" dangerouslySetInnerHTML={{__html: recipe.instructions}}>
            </p>
            
        </div>
    );
}

export default RecipeDetails;