import React from "react";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const MobileNav = ({ open, onClose }) => {
    const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
        open: open,
    });

    return (
        <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
            <NavLink className="mobile-link" activeClassName="active" exact to="/" onClick={onClose}>Home</NavLink>
            <NavLink className="mobile-link" activeClassName="active" to="/about" onClick={onClose}>About</NavLink>
            <NavLink className="mobile-link" activeClassName="active" to="/favourites" onClick={onClose}>Favourites</NavLink>
        </nav>
    );
};

export default MobileNav;