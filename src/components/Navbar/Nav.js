import React from 'react';

import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Web Solutions
            </NavLink>
        </nav>
    );
}

export default Nav;