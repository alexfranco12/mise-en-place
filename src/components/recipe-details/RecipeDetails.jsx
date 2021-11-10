import { useParams } from 'react-router';
import { useFetch } from '..';

import CommentSection from '../comment-section/CommentSection'
import './RecipeDetails.css'

const RecipeDetails = () => {
  const key = process.env.REACT_APP_SPOONACULAR_KEY
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`

  const { data: recipe, isPending, error } = useFetch(url);

  const displayRecipeSummary = () => {
    let str = recipe.summary;
    return(str.replace( /(<([^>]+)>)/ig, ''))
  }

  const displayRecipeTags = (diets) => {
    if (diets.length < 2) {
      return(diets.map(diet => <span>{diet}</span>))
    } else {
      return(diets.map((diet) => (
        <span>{recipe.diets.indexOf(diet) < recipe.diets.length-1 ? diet+' | ' : diet }</span>
      )))
    }
  }

  return (
    <div className="recipe-details">
      { isPending && <div> Loading... </div>}
      { error && <div> { error } </div>}
      { recipe && (
        <article className="details__container">
          <div className="detail__header">
            <h1 className="title detail__title">{recipe.title}</h1>
            <p className="recipe__credits">Compliments of {recipe.creditsText}</p>
            <div className="recipe__tags">
              {displayRecipeTags(recipe.diets)}
              <p className="readyIn">ready in {recipe.readyInMinutes} minutes! </p>
              <p>servings: {recipe.servings}</p>
            </div>
          </div>

          <p>{displayRecipeSummary()}</p>

          <div className="recipe__summary">
            <div 
              className="recipe__ingredients" 
              style={{
                backgroundImage: `url(${recipe.image})`,
                backgroundPosition: 'right',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}>
              <h4>Ingredients</h4>
              {recipe.extendedIngredients.map((ingredient) => (
                <div className="ingredient">
                  <input 
                    type="checkbox"
                    /> {ingredient.original}
                </div>
              ))}
            </div>
            {/* <img 
              className="recipe__image" 
              src={recipe.image} 
              alt={recipe.title} 
            /> */}
          </div>

          <h4>Instructions</h4>
          <div className="recipe__instructions">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <p className="instructions__step">
                  <span>{step.number}.</span> {step.step}
              </p>
            ))}
          </div>

          <div className="recipe__nutrition">
            <h4 className="">Nutrition Facts</h4>
          </div>

          <CommentSection />
        </article>
      )}
    </div>
  );
}

export default RecipeDetails;