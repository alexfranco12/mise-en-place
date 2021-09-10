import { useState } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
  const [ingredientList, setIngredientList] = useState('')
    
  return ( 
    <div className="search-bar">
      <div className="search__wrap">
        <div className="search__box">
          <input 
            className="search__input"
            onChange={(e) => setIngredientList(e.target.value)}
            placeholder="Search for your favorite recipe"
            value={ingredientList}
            type="text"
            required 
          />
          <Link to={`/search/${ingredientList.split(' ')}`}>
            <div className="button search__button">
              {/* <i className="search__icon"></i> */}
              Search
            </div>
          </Link>
        </div>
      </div>

      {/* <form className="search__form" >
        <label htmlFor="searchbar"/>
        
        
      </form>  */}
    </div>
   );
}
 
export default SearchBar;