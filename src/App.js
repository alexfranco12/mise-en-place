import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, RecipeListPage, NotFound } from './pages';
import RecipeDetails from './components/recipe-details/RecipeDetails'
import RandomRecipes from './components/random-recipes/RandomRecipes';
import { MainLayout, InnerLayout } from './styles'

function App() {
  return (
    <Router>
      <MainLayout>
        <InnerLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/recipe/details/:id" component={RecipeDetails} />
            <Route path="/complex-search/:ingredientList" component={RecipeListPage} />
            <Route path="/random-search/:tags" component={RandomRecipes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </InnerLayout>
      </MainLayout>
    </Router>
  );
}

export default App;
