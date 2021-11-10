import useFetch from '../useFetch';
import RecipeList from '../recipe-list/RecipeList';
import SearchBar from '../search-bar/SearchBar';
import Sidebar from '../sidebar/Sidebar'
import './Home.css'

const Home = () => {
  const numberOfRecipes = 30;
  const key = process.env.REACT_APP_SPOONACULAR_KEY;
  const url = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${key}`
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div className="Home">
      <div className="home__header">
        <h2 className="title recipe__title"> RECIPES </h2>
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
    </div>
  )
}

export default Home;