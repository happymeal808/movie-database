// Footer
import React from 'react';
import { getYear } from '../utils/getDates';

const Footer = ({ copyright, author }) => (
	<footer>
        <p>&copy; {copyright} {author}</p>
    </footer>
);

Footer.defaultProps = {
    author: 'Gillian Downey',
    copyright: getYear()
}

export default Footer;