import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <nav className="Navigation">
        <p>home</p>
        <p>about</p>
        <p>recipes</p>
        <p>meal plan</p>
      </nav>

      <div className="Home">
        <Home />
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
