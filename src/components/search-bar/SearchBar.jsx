import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'

const SearchBar = () => {
  const [ingredientList, setIngredientList] = useState('')
    
  return (
    <div className="Searchbar">
      
      <div className="search__box">
        <input 
          className="search__input"
          onChange={(e) => setIngredientList(e.target.value)}
          placeholder="Search"
          value={ingredientList}
          type="text"
          required 
        />
        <Link 
          to={`/complex-search/${ingredientList.split(' ')}`} 
          className="button search__button">
            <SearchIcon />
        </Link>
      </div>
    </div>
   );
}
 
export default SearchBar;