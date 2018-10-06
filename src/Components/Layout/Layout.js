import React, { Component } from 'react';
import Weighing from '../Weighing/Weighing';
import Toolbar from '../Toolbar/Toolbar'
import MainContainer from '../../hoc/MainContainer/MainContainer'

class Layout extends Component {
    render() {
        return (
            <>
                <Toolbar></Toolbar>
                <MainContainer>
                    <Weighing></Weighing>
                </MainContainer>
            </>
        );
    }
}

export default Layout;
