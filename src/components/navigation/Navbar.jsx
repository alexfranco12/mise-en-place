import styled from 'styled-components';
import { NavItem } from '..';

export const Navbar = () => {
  return ( 
    <NavBarStyled>
      <div className="header">
        <h1>Mise En Place</h1>
        <p>me zaⁿ plas</p>
      </div>
      
      <div className="links">
        <NavItem href={"/"} text={"home"} />
        <NavItem href={"/about"} text={"about"} />
      </div>
    </NavBarStyled>
   );
};

const NavBarStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  & .links {
    margin-left: auto;
    padding-right: 1rem;
    display: flex;
  }
`;