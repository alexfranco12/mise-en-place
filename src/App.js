import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import RecipeDetails from './components/RecipeDetails'
import About from './components/About'
import './App.css';

function App() {
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

      <main className="Home">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" render={routerProps => (
          <RecipeDetails match={routerProps.match} />
        )}/>
      </main>

      <div className="Sidebar">
        <Sidebar />
      </div>
      
    </div>
  );
}

export default App;
