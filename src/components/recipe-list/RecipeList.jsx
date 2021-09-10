import { Link } from "react-router-dom";
import noImage from '../../assets/no-image.jpeg'
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  return ( 
    <div className="recipe-list cards">
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <img
            className="card__image"
            src={recipe.hasOwnProperty('image') ? recipe.image : noImage}
            alt={recipe.title}
          />
          <div className="card__content">
            <h3>{recipe.title}</h3>
            <p>{recipe.creditsText}</p>
            <p>- Serves up to {recipe.servings} people</p>
            <p>- Ready in {recipe.readyInMinutes} minutes</p>
          </div>
          <div className="card__info">
            <div>
              {recipe.aggregateLikes} likes
            </div>
            <div>
              <Link className="card__link" to={`/recipe/details/${recipe.id}`}>View Recipe</Link>
            </div>
          </div>
        </div>        
      ))}

    </div>
   );
}
 
export default RecipeList;