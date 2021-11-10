import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ( ) => {
  const [ cuisine, setCuisine ] = useState(null);
  const [ diet, setDiet ] = useState(null);
  const [ intolerances, setIntolerances ] = useState(null);
  const i = new Set();

  const updateCuisine = (e) => {
    setCuisine(e.target.value)
  }

  const updateDiet = (e) => {
    setDiet(e.target.value)
  }

  const updateIntolerances = (e) => {

    setIntolerances(e.target.value)
    console.log(intolerances)
  }

  return (
    <div className="Sidebar">
      <Link 
        to={`/random-search/${cuisine+" "+diet}`}
        className="button search__button">
          <button className="filter__button">FILTER</button>
      </Link>

      <div className="sidebar__cuisine">
        <h3 className="cuisine__title">CUISINE</h3>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="african" 
            value="african"
            onChange={updateCuisine}
            /> african
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="american" 
            value="american"
            onChange={updateCuisine}
            /> american
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="asian" 
            value="asian"
            onChange={updateCuisine}
            /> asian
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="chinese" 
            value="chinese"
            onChange={updateCuisine}
            /> chinese
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="european" 
            value="european"
            onChange={updateCuisine}
            /> european
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="french" 
            value="french"
            onChange={updateCuisine}
            /> french
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="german" 
            value="german"
            onChange={updateCuisine}
            /> german
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="indian" 
            value="indian"
            onChange={updateCuisine}
            /> indian
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="japenese" 
            value="japenese"
            onChange={updateCuisine}
            /> japenese
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="mediterranean" 
            value="mediterranean"
            onChange={updateCuisine}
            /> mediterranean
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="mexican" 
            value="mexican"
            onChange={updateCuisine}
            /> mexican
        </label>
        <label htmlFor="cuisine">
          <input 
            type="radio" 
            name="cuisine" 
            id="thai" 
            value="thai"
            onChange={updateCuisine}
            /> thai
        </label>
      </div>

      {/* Sidebar diet filter */}
      <div className="sidebar__diets">
        <h3 className="diets__title">DIETS</h3>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="vegetarian" 
            value="vegetarian"
            onChange={updateDiet}
            /> vegetarian
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="pescetarian" 
            value="pescetarian"
            onChange={updateDiet}
            /> pescetarian
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="vegan" 
            value="vegan"
            onChange={updateDiet}
            /> vegan
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="ketogenic" 
            value="ketogenic"
            onChange={updateDiet}
            /> ketogenic
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="paleo" 
            value="paleo"
            onChange={updateDiet}
            /> paleo
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="primal" 
            value="primal"
            onChange={updateDiet}
            /> primal
        </label>
        <label htmlFor="Diet">
          <input 
            type="radio" 
            name="Diet" 
            id="whole30" 
            value="whole30"
            onChange={updateDiet}
            /> whole30
        </label>
      </div>

      {/* sidebar intolerance filter */}
      <div className="sidebar__intolerances">
        <h3 className="intolerances__title">INTOLERANCES</h3>
        <label htmlFor="intolerance">
          <input 
            type="checkbox" 
            name="intolerance" 
            id="gluten-free" 
            value="gluten free"
            onChange={updateIntolerances}
            /> no gluten
        </label>
        <label htmlFor="intolerance">
          <input 
            type="checkbox" 
            name="intolerance" 
            id="dairy-free" 
            value="dairy free"
            onChange={updateIntolerances}
            /> no dairy
        </label>
      </div>
        
    </div>
  );
}

export default Sidebar;