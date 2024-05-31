import React from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MobileNav = ({open, onClose})=> {
    const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
        open: open,
    });

    return(
        <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
            <Link className="mobile-link" activeClassName="active" to="/" onClick={onClose}>Home</Link>
            <Link className="mobile-link" activeClassName="active" to="/about" onClick={onClose}>About</Link>
            <Link className="mobile-link" activeClassName="active" to="/favourites" onClick={onClose}>Favourites</Link>
        </nav>
    );
};

export default MobileNav;