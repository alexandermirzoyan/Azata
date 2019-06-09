import React, {Component} from 'react'

import '../../styles/AboutUs/Menu/menu.css'

class Menu extends Component{
    render(){
        return(
            <div className="color-white about-us-menu-wrapper" >
                <h1>About Us</h1>
                <ul className="d-flex" >
                    <li>Story</li>
                    <li>Team</li>
                    <li>Vision</li>
                    <li>Contacts</li>
                </ul>
            </div>
        )
    }
}

export default Menu