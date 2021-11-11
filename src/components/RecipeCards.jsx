import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from '../assets/no-image.jpeg'

export const RecipeCards = ({ recipes }) => {
  return ( 
    <RecipeCardsStyled>
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <img
            className="card__image"
            src={recipe.hasOwnProperty('image') ? recipe.image : noImage}
            alt={recipe.title}
          />
          <div className="card__content">
            <h3>{recipe.title}</h3>
            <p>{recipe.creditsText}</p>
            <p>- Serves up to {recipe.servings} people</p>
            <p>- Ready in {recipe.readyInMinutes} minutes</p>
          </div>
          <div className="card__info">
            <div>
              {recipe.aggregateLikes} likes
            </div>
            <div>
              <Link 
                className="card__link" 
                to={`/recipe/details/${recipe.id}`}
                > View Recipe
              </Link>
            </div>
          </div>
        </div>        
      ))}

    </RecipeCardsStyled>
   );
};

const RecipeCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 20px;
  & .card {
    box-shadow: ${props => props.theme.shadows.shadow1};
    & .card__image {
      width: 100%;
      display: block;
    }
    & .card__content {
      line-height: 1.5;
      font-size: 0.9em;
      padding: 15px;
      background: #fafafa;
      & p:first-of-type {
        margin-top: 0;
      }
      & p:last-of-type {
        margin-bottom: 0;
      }
    }
    & .card__info {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #eee;
      font-size: 0.8em;
      border-bottom: 2px solid #ccc;
    }
    & .card__link {
      color: ${props => props.theme.colors.secondary1};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
