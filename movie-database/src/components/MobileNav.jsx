import React from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MobileNav = ({open})=> {
    const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
        open: open,
    });

    return(
        <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
            <Link className="mobile-link" activeClassName="active" to="/">Home</Link>
            <Link className="mobile-link" activeClassName="active" to="/about">About</Link>
            <Link className="mobile-link" activeClassName="active" to="/favourites">Favourites</Link>
        </nav>
    );
};

export default MobileNav;