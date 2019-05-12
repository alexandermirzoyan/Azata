import React, { Component, Fragment } from 'react'

import Header from '../../components/Header/Header'
import AllPlaces from "../../components/AllPlaces/AllPlaces";
import Video from "../../components/Video/Video";
import Events from "../../components/Nearly Events/nearlyEvents";
import AboutUs from '../../components/AboutUs/AboutUs';
import Suggestion from '../../components/Suggestion/Suggestion';
import Footer from '../../components/Footer/Footer';

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