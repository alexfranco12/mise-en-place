import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="header">
        <h1>Mise En Place</h1>
        <p>me zaⁿ plas</p>
      </div>
      
      <div className="links">
        <Link to="/" className="link">home</Link>
        <Link to="/about" className="link">about</Link>
      </div>
    </div>
   );
}
 
export default Navbar;