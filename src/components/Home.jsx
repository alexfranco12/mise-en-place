import React, { useEffect, useState } from 'react';

function Home() {
    const [recipes, setRecipes] = useState([])

    const searchOptions = {
        key : process.env.REACT_APP_SPOONACULAR_KEY,
        baseURL : "https://api.spoonacular.com/recipes/random",
        tags : "",
        number : 8
    };

    useEffect(() => {
        function fetchRandomRecipes() {
            const url = `${searchOptions.baseURL}?number=${searchOptions.number}&apiKey=${searchOptions.key}`
            
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setRecipes(data.recipes);
                })
                .catch(console.error);
        }
        fetchRandomRecipes()
    }, []);

    return (
        <section className="cards-container">
            {recipes.map(recipe => (
                <div className="card">
                    <div className="card-image">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                        />
                    </div>
                    <div className="card-title">
                        <h3>{recipe.title}</h3>
                    </div>
                </div> 
            ))}
        </section>
    )
}

export default Home;