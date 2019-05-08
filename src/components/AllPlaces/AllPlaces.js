import React, { Component } from "react";
import Table from "../../images/table.png"
import Next from "../../icons/down-arrow new.png"

import "../../styles/AllPlaces/allPlaces.css"

class AllPlaces extends Component {
    /*<div className="d-flex all-places">
                <div>
                    <p className="heading">
                        Everywhere will be free
                    </p>

                    <p className="description">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum
                    </p>

                    <button className="first-button">all places</button>
                </div>
                <div>
                    <img className="table-img" src={Table} alt="table-img"/>
                </div>

                <button className="next-page-button">
                    <img src={Next}/>
                </button>
            </div>*/
    render() {
        return (
            <div className="d-flex justify-content-between all-places-wrapper">
                <div className="all-places-intro-wrapper">
                    <h2 className="h2 color-white">Everywhere is free</h2>
                    <div className="d-none table-icon-wrapper hidden-table-icon">
                        <img src={Table} alt="table-icon" />
                    </div>
                    <p className="color-white all-places-description">Մարդը իր տեղը պետք է ընտրի, այլ ոչ թե ընդունի:
                    </p>
                </div>
                <div className="all-places-icon--button">
                    <div className="table-icon-wrapper">
                        <img width="400" src={Table} alt="table-icon" />
                    </div>
                    <button className="first-button">all places</button>
                </div>
                {/*<div className="next-page-button-wrapper">
                    <button className="next-page-button">
                        <img src={Next} alt="next page button" />
                    </button>
                </div>*/}
            </div>

        )
    }
}

export default AllPlaces