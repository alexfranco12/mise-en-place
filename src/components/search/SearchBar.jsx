import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
  const [ingredientList, setIngredientList] = useState('')
    
  return (
    <SearchBarStyled>
      <input 
        className="search__input"
        onChange={(e) => setIngredientList(e.target.value)}
        placeholder="Search your favorite ingredients"
        value={ingredientList}
        type="text"
        required 
      />
      <Link 
        className="button search__button"
        to={`/complex-search/${ingredientList.split(' ')}`}
        > <SearchIcon />
      </Link>
    </SearchBarStyled>
   );
};

const SearchBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 400px;
  background-color: ${props => props.theme.colors.light2};
  border: 2px solid ${props => props.theme.colors.dark1};
  border-radius: 40px;
  & .search__input {
    font-size: 1.125rem;
    position: absolute;
    width: 100%;
    left: 30px;
    border: none;
    background: none;
    outline: none;
    
  }
  & .search__button {
    position: absolute;
    right: -2px;
    width: 40px;
    height: 40px;
    border: 2px solid;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary2};
    color: ${props => props.theme.colors.dark1};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      filter: brightness(80%);
    }
  }
`;