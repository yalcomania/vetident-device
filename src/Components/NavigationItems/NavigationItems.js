import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Tartım</NavigationItem>
        <NavigationItem link="/history">Kayıtlar</NavigationItem>
    </ul>
);

export default navigationItems;