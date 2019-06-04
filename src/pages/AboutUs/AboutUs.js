import React, {Component, Fragment} from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../../components/Header/Header'
import Menu from '../../components/AboutUs/Menu'

class AboutUs extends Component{
    render(){
        const theme = {
            backgroundColor: 'red'
        }

        return(
            <Fragment>
                <Header/>
                <Menu/>
            </Fragment>
        )
    }
}

export default AboutUs