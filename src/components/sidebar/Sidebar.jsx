import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RadioItem from './RadioItem';

const allCuisines = [
  "african",
  "american",
  "asian",
  "chinese",
  "european",
  "french",
  "german",
  "indian",
  "japenese",
  "mediterranean",
  "mexican",
  "thai"
]

const allDiets = [
  "vegetarian",
  "pescetarian",
  "vegan",
  "ketogenic",
  "paleo",
  "primal",
  "whole30"
]

const allIntolerances = [
  "gluten free",
  "dairy free"
]

const initialState = {
  cuisine: null,
  diet: null,
  intolerances: null,
}

export const Sidebar = ( ) => {
  const [ filter, setFilter ] = useState(initialState)

  const updateFilter = (e) => {
    const { id, value } = e.target;
    const updatedFilter = {...filter};
    updatedFilter[id] = value;
    setFilter(updatedFilter);
  }

  return (
    <SidebarStyled>
      <Link 
        to={`/random-search/${filter.cuisine+" "+filter.diet}`}
        className="filter__button">
          <span>FILTER</span>
      </Link>

{/* Sidebar cuisine filter */}
      <RadioItem
        title={"cuisine"} 
        category={allCuisines} 
        updateFilter={updateFilter} 
      />

{/* Sidebar diet filter */}
      <RadioItem 
        title={"diet"} 
        category={allDiets} 
        updateFilter={updateFilter} 
      />

{/* sidebar intolerance filter */}
      <div className="sidebar__intolerances">
        <h3 className="intolerances__title">INTOLERANCES</h3>
        {allIntolerances.map((type, i) => (
          <label key={i} htmlFor="intolerance">
            <input 
              type="checkbox" 
              name="intolerance" 
              id={type}
              value={type}
              onChange={updateFilter}
              /> {type}
          </label>
        ))}
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & .filter__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.light3};
    width: 100%;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.main1};
    border-radius: 15px;
    margin-bottom: 0.875rem;
    & span {
      color: ${props => props.theme.colors.secondary1};
      font-size: 1.25rem;
      letter-spacing: 4px;
    }
  }
  & .sidebar__intolerances {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;