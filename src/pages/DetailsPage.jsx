import styled from 'styled-components';
import { useParams } from 'react-router';
import { useFetch } from '../components';

export const DetailsPage = () => {
  const key = process.env.REACT_APP_SPOONACULAR_KEY
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key}`
  const { data: recipe, isPending, error } = useFetch(url);

  const displayRecipeSummary = () => {
    let str = recipe.summary;
    return(str.replace( /(<([^>]+)>)/ig, ''))
  }

  const displayRecipeTags = (diets) => {
    if (diets.length < 2) {
      return(diets.map((diet, i) => <span key={i}>{diet}</span>))
    } else {
      return(diets.map((diet, i) => (
        <span key={i}>{recipe.diets.indexOf(diet) < recipe.diets.length-1 ? diet+' | ' : diet }</span>
      )))
    }
  }

  return (
    <DetailsPageStyled>
      { isPending && <div> Loading... </div>}
      { error && <div> { error } </div>}
      { recipe && (
        <article className="container">
          <div className="header">
            <h1 className="title">{recipe.title}</h1>
            <p className="recipe__credits">Compliments of {recipe.creditsText}</p>
            <div className="recipe__tags">
              {displayRecipeTags(recipe.diets)}
              <p className="readyIn">ready in {recipe.readyInMinutes} minutes! </p>
              <p>servings: {recipe.servings}</p>
            </div>
          </div>

          <div className="recipe__summary">
            <p>{displayRecipeSummary()}</p>
          </div>
          

          <div className="recipe__ingredients">
            <h4>Ingredients</h4>
            {recipe.extendedIngredients.map((ingredient, i) => (
              <div className="ingredient" key={i}>
                <input 
                  type="checkbox"
                  /> {ingredient.original}
              </div>
            ))}
          </div>

          <div 
            className="recipe__image"
            style={{
              backgroundImage: `url(${recipe.image})`,
              backgroundPosition: 'top',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>

          {/* <img 
            className="recipe__image" 
            src={recipe.image} 
            alt={recipe.title} 
          /> */}

          
          <div className="recipe__instructions">
            <h4>Instructions</h4>
            {recipe.analyzedInstructions[0].steps.map((step, i) => (
              <p className="instructions__step" key={i}>
                  <span>{step.number}.</span> {step.step}
              </p>
            ))}
          </div>

          <div className="recipe__nutrition">
            <h4 className="">Nutrition Facts</h4>
          </div>

          {/* <CommentSection /> */}
        </article>
      )}
    </DetailsPageStyled>
  );
};

const DetailsPageStyled = styled.div`
  & .container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 1.5rem 1rem;
    & .header {
      grid-column: 1 / span 10;
      grid-row: 1;
      display: flex;
      flex-direction: column;
      & .title {
        align-self: center;
        border-bottom: 1px solid ${props => props.theme.colors.dark3};
        padding: .5rem 0;
        margin-bottom: 0.5rem;
        
      }
    }
    & .recipe__summary {
      grid-column: 1 / span 10;
      grid-row: 2;
    }
    & .recipe__ingredients {
      grid-column: 1 / span 4;
      grid-row: 3;
      & .ingredient {
        line-height: 2rem;
      }
    }
    & .recipe__image {
      grid-column: 5 / span 6;
      grid-row: 3;
    }
    & .recipe__instructions {
      grid-column: 1 / span 10;
      grid-row: 4;
      line-height: 2rem;
    }
  }
`;