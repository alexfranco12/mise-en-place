import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import RecipeDetails from './components/RecipeDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <nav className="Navigation">
        <Link to="/">home</Link>
        <p>about</p>
        <p>recipes</p>
        <p>meal plan</p>
      </nav>

      <div className="Home">
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" render={routerProps => (
          <RecipeDetails match={routerProps.match} />
        )}/>
      </div>

      <div className="Sidebar">
        <Sidebar />
      </div>
      
      

      <main className="Main">
        
      </main>
    </div>
  );
}

export default App;
