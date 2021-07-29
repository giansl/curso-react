import React from 'react';
import '../assets/styles/components/Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <Link to="login">
            Terminos de uso
            </Link>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    );
}

export default Footer;