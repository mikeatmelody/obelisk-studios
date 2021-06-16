import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #24242a;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    z-index: 999;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 20px;
    }
    a {
        color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/services">Services</Link></li>
      <li><Link to='/top-picks'>Top Picks</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><Link to='/brands'>Brands</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><a href="mailto: tom@obeliskstudios.ca">tom@obeliskstudios.ca</a></li>
    </Ul>
  )
}

export default RightNav