import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const Nav = styled.nav`
  font-weight:700;
  display: flex;
  justify-content: space-between;
  .logo {
    font-family: 'Paytone One', sans-serif;
    font-size: 1.875rem;
    color:var(--orange-color);
}
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Daisy
      </div>
      <BurgerMenu />
      <div></div>
    </Nav>
  )
}

export default Navbar