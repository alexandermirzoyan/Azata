import React, { Component } from 'react';

import SuggestionPopUp from '../SuggestionPopUp/SuggestionPopUp'

import idea from "../../images/idea.png";

import "../../styles/Suggestion/suggestion.css";

class Suggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggleIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })

        console.log(this.state.isOpen)
    }

    render() {
        return (
            <div className="suggestion-block-wrapper" >
                <div className="suggestion-title-wrapper" >
                    <h2 className="color-white" >Do you have a suggestion?</h2>
                </div>

                {this.state.isOpen ?
                    <SuggestionPopUp isOpen={this.state.isOpen} />
                : null}

                <div className="d-flex suggestion-content-wrapper" >
                    <div className="idea-image-wrapper big-screen-size-idea-image-wrapper" >
                        <img src={idea} alt="idea-image-for-big-screen-size" />
                    </div>
                    <div className="d-flex suggestion-intro-wrapper" >
                        <p className="color-white" >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="d-none idea-image-wrapper small-screen-size-idea-image-wrapper" >
                            <img src={idea} alt="idea-image" />
                        </div>
                        <button onClick={this.toggleIsOpen} className="suggestion-pop-up-button">make offer</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Suggestion;