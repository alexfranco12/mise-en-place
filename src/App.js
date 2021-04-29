import { useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/home/Home'
import RecipeDetails from './components/recipe-details/RecipeDetails'
import About from './components/About'
import WebFont from 'webfontloader';
import './App.css';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Prata', 'Raleway']
      }
    });
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <nav className="Navigation">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <p>recipes</p>
        <p>meal plan</p>
      </nav>

      <main className="Main">
        <div>
          <Route exact path="/" component={Home} />
        </div>

        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" render={routerProps => (
          <RecipeDetails match={routerProps.match} />
        )}/>
        
      </main>

      
      
    </div>
  );
}

export default App;
