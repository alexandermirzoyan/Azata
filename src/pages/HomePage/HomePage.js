import React, {Component, Fragment} from 'react'

import Header from '../../components/Header/Header.js'
import AllPlaces from "../../components/AllPlaces/AllPlaces.js";
import Video from "../../components/Video/Video.js";
import Events from "../../components/Nearly Events/nearlyEvents.js";
/* About Us block's import */
import Suggestion from '../../components/Suggestion/Suggestion.js';
import Footer from '../../components/Footer/Footer.js';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="home-page-wrapper">
                    <AllPlaces/>
                    <Video/>
                    <Events/>
                    <Suggestion/>
                    <Footer/>
                </div>
            </Fragment>
        )
    }
}

export default HomePage;