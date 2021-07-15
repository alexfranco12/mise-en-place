import React, { useEffect, useState } from 'react';
import image from '../images/no-image.jpeg'
import data from '../sample-json-files/randomRecipes.json'
import Sidebar from '../sidebar/Sidebar';
import { FilterContext } from '../FilterContext'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [ tags, setTags ] = useState({
        diet: "",
        mealTypes: "",
        cuisine: new Set(),
        intolerances: new Set()
    });
    const [userInput, setUserInput] = useState("");

    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes",
        cuisine : "",
        query : "",
        diet : "",
        tags : "",
        intolerances : "",
        number : 25,
        filterType : "random"
    };

    function fetchRecipes() {

        if (searchOptions.filterType === 'complexSearch') {
            searchOptions.tags = "";
            searchOptions.cuisine = "cuisine="+[...tags.cuisine].join(',')+"&"
            searchOptions.diet = "diet="+tags.diet+"&"
            searchOptions.intolerances = "intolerances="+[...tags.intolerances].join(',')+"&"
        }

        const url = `${searchOptions.baseURL}/${searchOptions.filterType}?${searchOptions.tags}${searchOptions.query}${searchOptions.cuisine}${searchOptions.diet}${searchOptions.intolerances}number=${searchOptions.number}&apiKey=${searchOptions.key}`

        console.log("new search")
        console.log(url);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (searchOptions.filterType === 'random') setRecipes(data.recipes)
                if (searchOptions.filterType === 'complexSearch') setRecipes(data.results)
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchRecipes()
    }, []);

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let ingredientList = userInput.split(' ');
        searchOptions.filterType = "complexSearch";
        searchOptions.query = "query="+ingredientList.join(',')+"&";
        
        fetchRecipes();
        setUserInput("");
    }

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        
        console.log("Filter Tags:")
        console.log(tags);

        if (searchOptions.filterType === 'random') {
            searchOptions.tags = "tags="+[...tags.cuisine].join('')+tags.diet+"&";
        } 
        if(tags.intolerances.size > 0) {
            searchOptions.filterType = "complexSearch";
        }
        fetchRecipes();
    }

    const displayImage = (recipe) => {
        if (recipe.hasOwnProperty('image')) return recipe.image
        else return image
    }

    return (
        <div className="Home">
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="header-search"></label>
                <input 
                    id="header-search"
                    onChange={handleChange}
                    placeholder="Search for your favorite recipe"
                    value={userInput}
                    type="text"
                    required />
                <input type="submit" className="search-button" value="Search"/>
            </form> 
            <div className="cards-container">
                {recipes.map(recipe => (
                    <Link to={`/details/${recipe.id}`} key={recipe.id} className="link">
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
                <form onSubmit={handleFilterSubmit}>
                    <input type="submit" value="Filter" />
                    <button type="button">Reset Filter</button>
                    <FilterContext.Provider value={{ tags, setTags }}>
                        <Sidebar />
                    </FilterContext.Provider>
                </form> 
            </div>
        </div>
        
    )
}

export default Home;