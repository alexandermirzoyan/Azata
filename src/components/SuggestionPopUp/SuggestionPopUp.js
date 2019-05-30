import React, { Component, Fragment } from 'react'

import HomePage from '../../pages/HomePage/HomePage'
import Suggestion from '../Suggestion/Suggestion'

import popUpRocket from '../../images/pop-up-rocket.png'
import closeButton from '../../icons/close-button.png'

import '../../styles/SuggestionPopUp/suggestionPopUp.css'

class SuggestionPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            changePage: false,
        }
    }

    changeToHomePage = () => {
        this.setState({ changePage: !this.state.changePage })
        console.log(this.state.changePage)
    }

    render() {
        return (
            this.state.changePage ? <Suggestion isOpen={this.state.isOpen} /> :
                <Fragment>
                    <div onClick={this.changeToHomePage} className="big-pop-up-wrapper" />
                    <div className="pop-up-wrapper" >
                        <div className="pop-up-left-side-wrapper" >
                            <div className="d-flex" >
                                <div className="pop-up-title-wrapper" >
                                    <h2 className="color-white" >Write your
                                <span className="pop-up-pink-color" > idea </span>
                                    </h2>
                                    <h2 className="color-white" >and</h2>
                                    <h2 className="color-white" >We will contact you</h2>
                                </div>
                                <div className="pop-up-rocket-img-wrapper" >
                                    <img src={popUpRocket} alt="pop-up-rocket" />
                                </div>
                            </div>
                        </div>

                        <div className="pop-up-right-side-wrapper" >
                            <div className="page color-white">
                                <div className="d-flex page__demo">
                                    <label className="field a-field a-field_a1 page__field">
                                        <input className="field__input a-field__input" placeholder="Enter your full name" required />
                                        <span className="a-field__label-wrap">
                                            <span className="a-field__label">Full name</span>
                                        </span>
                                    </label>
                                    <label className="field a-field a-field_a2 page__field">
                                        <input className="field__input a-field__input" placeholder="Enter your email" required />
                                        <span className="a-field__label-wrap">
                                            <span className="a-field__label">Email</span>
                                        </span>
                                    </label>
                                    <label className="field a-field a-field_a2 page__field">
                                        <input className="field__input a-field__input" placeholder="Enter your phone number" required />
                                        <span className="a-field__label-wrap">
                                            <span className="a-field__label">Phone number</span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <label className="color-white textarea-label" >Please enter your suggestion</label>
                            <textarea className="suggestion-pop-up-textarea" />
                            <div className="d-flex upload-pdf-button-wrapper" >
                                <button className="upload-pdf-pop-up" >upload PDF</button>
                                <button className="send-button-pop-up a" >send</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default SuggestionPopUp;