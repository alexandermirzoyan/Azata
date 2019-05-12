import React, {Component} from 'react'

import '../../styles/SuggestionPopUp/suggestionPopUp.css'

class SuggestionPopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.inOpen || false
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            isOpen: props.isOpen || false
        });
    }

    render(){
        let {isOpen} = this.state; 
        return(
            <div className="pop-up-wrapper" >

            </div>
        )
    }
}

export default SuggestionPopUp;