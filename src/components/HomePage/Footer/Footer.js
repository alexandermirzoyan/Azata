import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/HomePage/Footer/footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="d-flex align-items-center footer-wrapper">
                <div className="footer-left-side" >
                    <ul>
                        <li> <NavLink to="/asd"> Lorem Ipsum </NavLink> </li>
                        <li> <NavLink to="/asd"> Lorem Ipsum </NavLink> </li>
                        <li> <NavLink to="/asd"> Lorem Ipsum </NavLink> </li>
                    </ul>
                </div>

                <div className="footer-right-side" >
                    <ul>
                        <li> <NavLink to="/asd"> Lorem Ipsum </NavLink> </li>
                        <li> <NavLink to="/"> Lorem Ipsum </NavLink> </li>
                        <li> <NavLink to="/" > Lorem Ipsum </NavLink> </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer