import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';
import RecipeList from '../recipe-list/RecipeList';

const RandomRecipes = () => {
  const { ingredientList } = useParams();
  const { data: recipes, isPending, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredientList}&number=${25}&apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`);

  return ( 
    <div className="random-recipes">
      <h2> RECIPES </h2>
        { error && <div> {error} </div> }
        { isPending && <div> Loading... </div> }
        { recipes && <RecipeList recipes={recipes.results} /> }
    </div>
   );
}
 
export default RandomRecipes;