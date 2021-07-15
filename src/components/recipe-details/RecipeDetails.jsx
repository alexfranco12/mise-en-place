import React, { useEffect, useState } from 'react';
import data from '../sample-json-files/Recipe.json'
import './RecipeDetails.css'

function RecipeDetails( {match} ) {
    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [diets, setDiets] = useState([]);
    const [instructionSteps, setInstructionSteps] = useState([]);
    const [userComments, setUserComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("")

    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes",
        id : match.params.id,
        includeNutrition : 'true'
    };

    function fetchRecipe() {

        const url = `${searchOptions.baseURL}/${searchOptions.id}/information?includeNutrition=${searchOptions.includeNutrition}&apiKey=${searchOptions.key}`
            
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data);
                setIngredients(data.extendedIngredients);
                setDiets(data.diets);
                setInstructionSteps(data.analyzedInstructions[0].steps);
            })
            .catch(console.error);
    }

    useEffect( () => {
        fetchRecipe();
        displayComments();
    }, []);

    function handleCommentChange(e) {
        setComment(e.target.value);
    }
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleSubmitComment(e) {
        e.preventDefault();
        userComments.push({user: {name, comment}})
        console.log(userComments)
        setName("");
        setComment("")
        displayComments()
    }

    function displayComments() {
        return userComments.map(item => {
            return (
                <div className="comment">
                    <h4 className="user-name">{item.user.name} - </h4>
                    <p className="user-comment">{item.user.comment}</p>
                </div>
        )})
    }

    return (
        <div className="details-container">
            <div className="recipe-header">
                <h1 className="recipe-title">{recipe.title}</h1>
                <p className="credits">Compliments of {recipe.creditsText}</p>
                <div className="recipe-tags">
                    <p>tags: {diets.map(diet => <span className="diet">{diet} </span>)}</p>
                    <p className="ready-in">ready in {recipe.readyInMinutes} minutes! </p>
                    <p>servings: {recipe.servings}</p>
                </div>
 
            </div>
            <p className="summary" dangerouslySetInnerHTML={{__html: recipe.summary}}>
                </p>
            <div className="ingredient-container">
                <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                
                <div className="ingredients">
                    <h4>Ingredients</h4>
                    {ingredients.map((item) => <label><input key="{item.id}" type="checkbox"/><span className="ingredient">{item.original}</span></label>)}
                </div>
            </div>
            <h4>Instructions</h4>
            <div className="instructions">
                {instructionSteps.map((step) => <p className="step"><span>{step.number}.</span> {step.step}</p>)}
            </div>
            <div className="comment-container">
                <h4 className="comment-header">Comments</h4>
                    <form className="comment-form" onSubmit={handleSubmitComment}>
                        <input 
                            type="text" 
                            className="comment-name" 
                            placeholder="Full Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <textarea 
                            className="text-area"
                            rows="5"
                            cols="60"
                            name="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Leave a comment!"
                        >
                        </textarea>
                        <input 
                            type="submit" 
                            className="post-comment"
                            value="Post"
                        />
                    </form>
                    {displayComments()}
            </div>
        </div>
    );
}

export default RecipeDetails;