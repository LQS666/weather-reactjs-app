import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Made with <span>❤</span> in{` `}<a href="https://reactjs.org/" target="blank">ReactJS </a>{new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;