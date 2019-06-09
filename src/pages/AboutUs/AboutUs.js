import React, {Component, Fragment} from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../../components/Header/Header'
import Menu from '../../components/AboutUs/Menu'
import Content from '../../components/AboutUs/Content'
import Add from '../../components/AddBlocks/Add'

class AboutUs extends Component{
    render(){
        const theme = {
            backgroundColor: 'red'
        }

        return(
            <Fragment>
                <Header/>
                <div className="d-flex about-us-page-content-wrapper" >
                    <Menu/>
                    <Content />
                    <Add />
                </div>
            </Fragment>
        )
    }
}

export default AboutUs