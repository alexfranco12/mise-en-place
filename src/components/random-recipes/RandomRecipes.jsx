import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';
import RecipeList from '../recipe-list/RecipeList';
import './RandomRecipes.css'

const RandomRecipes = () => {
  const key = process.env.REACT_APP_SPOONACULAR_KEY;
  const number = 30;

  const { tags } = useParams();
  console.log(tags)

  let url = `https://api.spoonacular.com/recipes/random?tags=${tags}&number=${number}&apiKey=${key}`;
  const { data: recipes, isPending, error } = useFetch(url);

  // const listRecipes = () => {
  //   return(ingredientList.split(',').length > 1 ? ingredientList.split(',').join(', ') : ingredientList)
  // }

  return ( 
    <div className="random-recipes">
      <div className="random-recipes__header">
        <h2 className="recipe__title"> RECIPES </h2>
        {/* <p>for {listRecipes()}</p> */}
      </div>
        { error && <div> {error} </div> }
        { isPending && <div> Loading... </div> }
        { recipes && <RecipeList recipes={recipes.recipes} /> }
    </div>
   );
}
 
export default RandomRecipes;