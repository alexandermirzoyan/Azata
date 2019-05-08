import React, { Component } from "react";

import "../../styles/Nearly events/nearlyEvents.css"

import slider_image from '../../images/food.jpg'
import Next from "../../icons/down-arrow new.png";
import Cocktail from "../../images/cocktail.png";

class Events extends Component {
    render() {
        /*
        <div className="nearly-events-wrapper">
                <div className="heading-and-image">
                    <div className="heading2">
                        <p className="nearly">Nearly</p>
                        <div className="eventsAndSales">
                            <p className="events">events</p>
                            <p className="and">and</p>
                            <p className="sales">sales</p>
                        </div>
                    </div>
                    <div>
                        <img className="cocktail-img" src={Cocktail} alt="cocktail-img" />
                    </div>
                </div>

                <p className="description2">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                    </p>

                <button className="secont-button">see offers</button>

                    <button className="next-page-button2">
                        <img src={Next}/>
                    </button>


                </div>
        */
        return (
            <div className="d-flex justify-content-between align-items-center nearly-events-wrapper">
                <div className="d-flex align-items-center nearly-events-intro-wrapper" >
                    <div>
                        <h2 className="h2 color-white">Nearly</h2>
                        <p className="color-white" >events and sales</p>
                    </div>
                    <div className="cocktail-icon-wrapper" >
                        <img src={Cocktail} alt="cocktail icon" />
                    </div>
                </div>

                <div className="nearly-events-slider--button-wrapper" >
                <div className="carousel-wrapper" >
                    <img src={slider_image} alt="sliders" />
                </div>
                   
                    <div>
                        <button className="second-button">see offers</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events