import React, {Component} from 'react'

import Logo from '../../icons/logo-png.png'
import searchIcon from "../../icons/search.png"
//import {NavLink} from 'react-router-dom'

import "../../styles/Header/header.css"

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="left-side">
                    <div className="header-logo-wrapper">
                        <img className="header-logo-img" src={Logo} alt="Logo-icon"/>
                    </div>
                </div>

                <div className="right-side">
                    <img src={searchIcon} alt="Search-icon"/>
                    <a href="/am">ARM</a>
                    <a href="/ru">RUS</a>
                    <a href="/en">ENG</a>

                </div>
            </div>
        )
    }
}

export default Header