import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <NavLink 
            to='/calculator' 
            className="nav__item button"
            activeClassName='nav__item--active'
          >
            Калькулятор
          </NavLink>
          <NavLink 
            to={`/text?id=1&date=${new Date().toLocaleDateString()}`}
            className="nav__item button"
            activeClassName='nav__item--active'
          >
            Текстовая
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

