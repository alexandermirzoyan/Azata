import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Footer/footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="d-flex align-items-center footer-wrapper">
                <div className="footer-left-side" >
                    <ul>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                    </ul>
                </div>

                <div className="footer-right-side" >
                    <ul>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                        <li> <a href="/"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer