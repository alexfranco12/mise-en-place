import useFetch from '../useFetch';
import RecipeList from '../recipe-list/RecipeList';
import SearchBar from '../search-bar/SearchBar';

const Home = () => {
    const { data: recipes, isPending, error } = useFetch(`https://api.spoonacular.com/recipes/random?number=${25}&apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`);

    return (
        <div className="Home">
            <SearchBar />

            <h2> RECIPES </h2>
            { error && <div> {error} </div> }
            { isPending && <div> Loading... </div> }
            { recipes && <RecipeList recipes={recipes.recipes} /> }

        </div>
    )
}

export default Home;