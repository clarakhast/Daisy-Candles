import styled from 'styled-components';
import React from 'react'
import { NavLink } from 'react-router-dom'
import 'css/reset.css'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 1rem;
  }

  li a:hover {
    color:var(--orange-color);
  }

  .active {
    color:var(--orange-color);
    border-bottom: 2px solid var(--orange-color);
  }
  .login {
    background-color: var(--orange-color);
    padding: 0.3rem 1.2rem;
    border-radius:5rem;
    font-weight:700;
    font-size: 1rem;
}

.login:hover {
    color:black;
    background-color: var(--dark-orange);
}
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--dark-orange);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    li
    {
        border-bottom: 0.5px solid white;
    }
    li a{
      color: #fff;
    }

    li a:hover {
        color:black;
    }
    .login {
        background-color: var(--orange-color);
        color:black;
    }
    .login:hover {
        background-color: white;
    }

    .active{
        color:black;
        border-bottom:none;
    }
  }
`;

const RightNav = ({ open }) => {
    return (
            
        <Ul open={open}>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink exact to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><a href="#"><span className="material-icons">favorite_border</span></a></li>
            <li><a href="#"><span className="material-icons">shopping_cart</span></a></li>
            <li><a href="#" className="login">Login</a></li>
        </Ul>
    )
}

export default RightNav