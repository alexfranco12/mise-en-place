import styled from 'styled-components';
import { SearchBar } from '../components';
import useFetch from '../components/useFetch';
import RecipeList from '../components/recipe-list/RecipeList';
import Sidebar from '../components/sidebar/Sidebar'

export const HomePage = () => {
  const numberOfRecipes = 30;
  const key = process.env.REACT_APP_SPOONACULAR_KEY;
  const url = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${key}`
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <HomePageStyled>
      <div className="home__header">
        <h2 className="title recipe__title"> RECIPES </h2>
      </div>

      <div className="home__searchbar">
        <SearchBar />
      </div>
      
      <div className="home__recipes">
        { error && <div> {error} </div> }
        { isPending && <div> Loading... </div> }
        { recipes && <RecipeList recipes={recipes.recipes} /> }
      </div>
      
      <div className="home__sidebar">
        <Sidebar />
      </div>
    </HomePageStyled>
  )
};

const HomePageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 180px;
  grid-template-rows: 5rem auto;
  grid-gap: 0 1rem;
  & .home__header {
    grid-column: 1 / span 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .home__searchbar {
    grid-column: 3 /span 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .home__recipes {
    grid-column: 1 / span 3;
    grid-row: 2;
  }
  & .home__sidebar {
    grid-column: 4;
    grid-row: 2;
  }
`;