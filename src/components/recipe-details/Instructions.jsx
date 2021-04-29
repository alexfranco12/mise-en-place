import React, { useState, useEffect } from 'react';

function Instructions( {recipe} ) {
    // const [instructions, setInstructions] = useState([]);

    // const searchOptions = {
    //     key : process.env.REACT_APP_SPOONACULAR_KEY,
    //     baseURL : "https://api.spoonacular.com/recipes",
    //     id : recipe.id
    // };

    // useEffect( () => {
    //     function fetchInstructions() {
    //         const url = `${searchOptions.baseURL}/${searchOptions.id}/analyzedInstructions?apiKey=${searchOptions.key}`
            
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data)
    //                 setInstructions(data);
    //             })
    //             .catch(console.error);
    //     }
    //     fetchInstructions()
    // }, []);

    // const inst = [];
    // for (const index in instructions.steps) {
    //     inst.push(<li>{instructions.steps[index].step}</li>)
    // }

    return (
        <div>
            <ol>
                {inst}
            </ol>
        </div>
    )
}

export default Instructions;