import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../icons/logo.png';
import searchIcon from '../../icons/search.png';

import '../../styles/Header/header.css'

class Header extends Component {
    render() {
        return (
            <div className="d-flex header-wrapper">
                <div className="left-side">
                    <div className="header-logo-wrapper">
                        <img className="header-logo-img" src={logo} alt="Logo-icon"/>
                    </div>
                </div>
                <div className="d-flex right-side">
                    {/*<div className="search-wrapper" >
                        <div className="container" >
                            <input type="text" placeholder="Search..." />
                            <div className="search" />
                        </div>
                    </div>*/}

                    <div className="search-wrapper" >
                        <img className="header-logo-img" src={searchIcon} alt="" />
                    </div>

                    <div className="languages-wrapper">
                        <NavLink to="/am" isActive={console.log("hello")}>
                            ARM
                            <span className="underlined-link"> </span>
                        </NavLink>
                        <NavLink to="/ru">RUS</NavLink>
                        <NavLink to="/en">ENG</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

    export default Header;