import React, { useEffect, useState } from 'react';
import image from './images/no-image.jpeg'
import { Link } from 'react-router-dom';

function Home() {
    const [recipes, setRecipes] = useState([]);
    let userInput;

    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes",
        tags : "",
        ingredients : "",
        number : 25,
        filterType : "random"
    };

    
    function fetchRecipes() {
        const url = `${searchOptions.baseURL}/${searchOptions.filterType}?${searchOptions.ingredients}number=${searchOptions.number}&apiKey=${searchOptions.key}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (searchOptions.filterType === "random") setRecipes(data.recipes);
                else if (searchOptions.filterType === "findByIngredients") setRecipes(data);
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchRecipes()
    }, []);

    function handleChange(e) {
        userInput = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();
        let ingredientList = userInput.split(' ');
        searchOptions.filterType = "findByIngredients";
        searchOptions.ingredients = "ingredients="+ingredientList.join(',')+"&";
        fetchRecipes();
    }

    const displayImage = (recipe) => {
        if (recipe.hasOwnProperty('image')) return recipe.image
        else return image
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="header-search">Search for your favorite recipe: </label>
                <input type="text" id="header-search" placeholder="search recipes" onChange={handleChange}/>
                <input type="submit" />
            </form> 
            <h2> Get inspired with some fresh recipes below! </h2>
            <div className="cards-container">
                {recipes.map(recipe => (
                    <Link to={`/details/${recipe.id}`} key={recipe.id}>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src={displayImage(recipe)}
                                    alt={recipe.title}
                                />
                            </div>
                            <div className="card-title">
                                <h3>{recipe.title}</h3>
                            </div>
                        </div> 
                    </Link>
                    
                ))}
            </div>
        </div>
        
    )
}

export default Home;