import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/home/Home'
import RecipeDetails from './components/recipe-details/RecipeDetails'
import About from './components/about/About'
import NotFound from './components/NotFound'
import RandomRecipes from './components/random-recipes/RandomRecipes';
import ComplexRecipes from './components/complex-recipes/ComplexRecipes';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Navigation">
          <Navbar />
        </nav>

        <main className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/recipe/details/:id" component={RecipeDetails} />
            <Route path="/complex-search/:ingredientList" component={ComplexRecipes} />
            <Route path="/random-search/:tags" component={RandomRecipes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>

        <footer className="Footer">
          
        </footer>

      </div>
    </Router>
  );
}

export default App;
