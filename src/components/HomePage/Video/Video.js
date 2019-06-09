import React, {Component} from "react";
import Play from "../../../images/Mercedes-Benz presents_ King of the City Jungle _ S-Class Commercial.mp4"

import "../../../styles/HomePage/Video/video.css"

class Video extends Component{
    render() {
        return(
            <div className="video d-flex">
                <video controls>
                    <source src={Play} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default Video