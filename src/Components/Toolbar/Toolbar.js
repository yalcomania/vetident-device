import React, { Component } from 'react'
import './Toolbar.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'

class Header extends Component {
    render() {
        return (

            <header className="Toolbar">
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <div className="Logo">
                    Vetident
                </div>
                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        )
    }
}

export default Header;