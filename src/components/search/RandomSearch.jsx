import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { RecipeCards, useFetch } from '..';

export const RandomSearch = () => {
  const key = process.env.REACT_APP_SPOONACULAR_KEY;
  const number = 30;

  const { tags } = useParams();

  let url = `https://api.spoonacular.com/recipes/random?tags=${tags}&number=${number}&apiKey=${key}`;
  const { data: recipes, isPending, error } = useFetch(url);

  // const listRecipes = () => {
  //   return(ingredientList.split(',').length > 1 ? ingredientList.split(',').join(', ') : ingredientList)
  // }

  return ( 
    <RandomSearchStyled>
      <div className="header">
        <h2 className="title"> RECIPES </h2>
        {/* <p>for {listRecipes()}</p> */}
      </div>
        { error && <div> {error} </div> }
        { isPending && <div> Loading... </div> }
        { recipes && <RecipeCards recipes={recipes.recipes} /> }
    </RandomSearchStyled>
   );
};

const RandomSearchStyled = styled.div`

`;