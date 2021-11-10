import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
  const [ingredientList, setIngredientList] = useState('')
    
  return (
    <SearchBarStyled>
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
    </SearchBarStyled>
   );
};

const SearchBarStyled = styled.div`
  & .search__box {
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
      position: absolute;
      font-size: 1.125rem;
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
  }
`;