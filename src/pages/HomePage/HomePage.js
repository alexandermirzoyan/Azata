import React, { Component, Fragment } from 'react'

import Header from '../../components/Header/Header'
import AllPlaces from '../../components/HomePage/AllPlaces/AllPlaces';
import Video from '../../components/HomePage/Video/Video';
import Events from '../../components/HomePage/NearlyEvents/NearlyEvents';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';
import Suggestion from '../../components/HomePage/Suggestion/Suggestion';
import Footer from '../../components/HomePage/Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="home-page-wrapper">
                    <AllPlaces />
                    <Video />
                    <Events />
                    <AboutUs/>
                    <Suggestion />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default HomePage;