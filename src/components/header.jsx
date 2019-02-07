import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <header>
        <ul>
            <li><NavLink to="/canada">Canada</NavLink></li>
            <li><NavLink to="/usa">Canada</NavLink></li>
            <li><NavLink to="/brazil">Brazil</NavLink></li>
            <li><NavLink to="/france">France</NavLink></li>
        </ul>
    </header>
)

export default Header