import { useParams } from 'react-router';
import useFetch from '../useFetch';

const RecipeDetails = () => {
    const key = process.env.REACT_APP_SPOONACULAR_KEY
    const { id } = useParams();
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`

    const { data: recipe, isPending, error } = useFetch(url);

    console.log(recipe)

    return (
        <div className="recipe-details">
            { isPending && <div> Loading... </div>}
            { error && <div> { error } </div>}
            {recipe && (
                <article className="details-container">
                    <div className="recipe-header">
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <p className="credits">Compliments of {recipe.creditsText}</p>
                        <div className="recipe-tags">
                            <p>tags: {recipe.diets.map(diet => <span className="diet">{diet} </span>)}</p>
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
                            {recipe.extendedIngredients.map((item) => (
                                <label>
                                    <input key="{item.id}" type="checkbox"/>
                                    <span className="ingredient">{item.original}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <h4>Instructions</h4>
                    <div className="instructions">
                        {recipe.analyzedInstructions[0].steps.map((step) => (
                            <p className="step">
                                <span>{step.number}.</span> {step.step}
                            </p>
                        ))}
                    </div>
                </article>
            )}
        </div>
    );
}

export default RecipeDetails;