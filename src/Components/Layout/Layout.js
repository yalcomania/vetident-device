import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'
import MainContainer from '../../hoc/MainContainer/MainContainer'
import SideDrawer from '../SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <MainContainer>
                {this.props.children}
                </MainContainer>
            </>
        );
    }
}

export default Layout;
