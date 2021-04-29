import React, { useEffect, useState } from 'react';
import image from '../images/no-image.jpeg'
import data from '../sample-json-files/randomRecipes.json'
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [tags, setTags] = useState({
        diets: "",
        mealTypes: "",
        cuisine: [],
        intolerances: ""
    });
    let userInput;
    let cuisineArray = [];


    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes",
        tags : "",
        ingredients : "",
        number : 25,
        filterType : "random"
    };

    function fetchRecipes() {
        setRecipes(data.recipes)

        const url = `${searchOptions.baseURL}/${searchOptions.filterType}?${searchOptions.ingredients}${searchOptions.tags}number=${searchOptions.number}&apiKey=${searchOptions.key}`
        console.log(url);
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             if (searchOptions.filterType === "random") setRecipes(data.recipes);
    //             else if (searchOptions.filterType === "findByIngredients") setRecipes(data);
    //         })
    //         .catch(console.error);
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
        searchOptions.tags = "";
        searchOptions.filterType = "findByIngredients";
        searchOptions.ingredients = "ingredients="+ingredientList.join(',')+"&";
        fetchRecipes();
    }

    const handleClick = (e) => {
        searchOptions.filterType = "random"
        console.log(e.target.id)
        if (e.target.id === "cuisine") {
            cuisineArray.push(e.target.value)
            console.log(cuisineArray)
            setTags({...tags, "cuisine": cuisineArray});
        }
    }

    const filterFunction = () => {
        searchOptions.tags = "tags="+tags.cuisine+"&";
        fetchRecipes();
    }

    const displayImage = (recipe) => {
        if (recipe.hasOwnProperty('image')) return recipe.image
        else return image
    }

    return (
        <div className="Home">
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="header-search">Search for your favorite recipe: </label>
                <input type="text" id="header-search" placeholder="search recipes" onChange={handleChange} />
                <input type="submit" />
            </form> 
            <h2 className="home-title"> Get inspired with some fresh recipes below! </h2>
            <div className="cards-container">
                {recipes.map(recipe => (
                    <Link to={`/details/${recipe.id}`} key={recipe.id}>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    className="home-images"
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
            <div className="Sidebar">
                <Sidebar handleClick={handleClick} handleFilter={filterFunction}/>
            </div>
        </div>
        
    )
}

export default Home;