import React from 'react';
import { getYear } from '../utils/getDates';

const Footer = ({ copyright = getYear(), author = 'Gillian Downey' }) => (
  <footer className="footer">
    <p>&copy; {copyright} {author}</p>
  </footer>
);

export default Footer;