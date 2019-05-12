import React, { Component } from "react";
import Lamp from "../../images/lamp.png"

import "../../styles/AboutUs/aboutUs.css"

class AboutUs extends Component {

    /*
    <div className="about-us-wrapper">
                <div className="about-us-title-wrapper">
                    <h2>About us</h2>
                </div>
                <div className="discriptions-and-icon">
                    <div className="discription-first">
                        <p>
                            Dastqui dolor ipsumqa dolor
                            sitmet conse tequam eius.
                            Asmodi tempora innt
                            ut laboret dolore magnam. 
                            Naliquam quaerat volenie
                            ullam corporis suscipit innt 
                            labasic ut aliquidea commodi
                            consequatur. Sareprehe nderit,
                            muytas dressse, quamil molestiae
                            consequatur btresa baseras vreas
                            avel illumpora inciunt dolore.
                        </p>
                    </div>

                    <div className="icon">
                        <img src={Lamp} alt="Lamp"/>
                    </div>

                    <div className="discription-second">
                        <p>
                            Dastqui dolor ipsumqa dolorsitmet consetequam eius.
                            Asmodi tempora innt
                            ut laboret dolore magnam.
                            Naliquam quaerat volenie
                            ullam corporis suscipit innt
                            labasic ut aliquidea commodi
                            consequatur. Sareprehe nderit,
                            muytas dressse, quamil molestiae
                        </p>
                    </div>
                </div>
                <div>
                    <button className="more-button">more</button>
                </div>
            </div>
    */

    render() {
        return (
            <div className="about-us-wrapper" >
                <div className="about-us-title-wrapper" >
                    <h2 className="h2 color-white" >About Us</h2>
                </div>
                <div className="d-flex about-us-intro-wrapper" >
                    <div className="color-white about-us-left-side-wrapper" >
                        <p>Dastqui dolor ipsumqa dolor
                            sitmet conse tequam eius.
                            Asmodi tempora innt
                            ut laboret dolore magnam.
                            Naliquam quaerat volenie
                            ullam corporis suscipit innt
                            labasic ut aliquidea commodi
                            consequatur. Sareprehe nderit,
                            muytas dressse, quamil molestiae
                            consequatur btresa baseras vreas
                            avel illumpora inciunt dolore.
                        </p>
                    </div>
                    <div className="about-us-center-side-wrapper about-us-icon-wrapper" >
                        <img src={Lamp} alt="lamp-icon" />
                    </div>
                    <div className="color-white about-us-right-side-wrapper" >
                        <p>Dastqui dolor ipsumqa dolor
                                sitmet conse tequam eius.
                                Asmodi tempora innt
                                ut laboret dolore magnam.
                                Naliquam quaerat volenie
                                ullam corporis suscipit innt
                                labasic ut aliquidea commodi
                                consequatur. Sareprehe nderit,
                                muytas dressse, quamil molestiae
                                consequatur btresa baseras vreas
                                avel illumpora inciunt dolore.
                        </p>
                        <div className="big-size-button" >
                            <button className="about-us-more-button">more</button>
                        </div>
                    </div>
                </div>
                <div className="d-none small-size-button" >
                    <button className="about-us-more-button">more</button>
                </div>
            </div>
        )
    }
}

export default AboutUs