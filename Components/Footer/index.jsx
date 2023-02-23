import React from "react";
import Section from '../Shared/Section';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import SocialIcon from './Social-icon';
import { ScrollToSection } from '../Utils/helper';
import Logo from '../../Images/logo.jpg';
import './style.scss';

const Footer = () => {
    return (
        <Section
            background='dark'
            classname='footer'
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="footer-menu-items">
                    <li className="footer-menu-item" onClick={() => ScrollToSection('skills')}>
                        Skills
                    </li>
                    <li className="footer-menu-item" onClick={() => ScrollToSection('portfolio')}>
                        Portfolio

                    </li>
                    <li className="footer-menu-item" onClick={() => ScrollToSection('Blogs')}>
                        Blog & Articals
                    </li>
                    <li className="footer-menu-item" onClick={() => ScrollToSection('contact')}>
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color='#0A66C2'
                        icon={<AiFillLinkedin />}
                        link='https://www.linkedin.com/in/shubham-pagar-557112235/'
                    />
                    <SocialIcon
                        color='#0D2636'
                        icon={<AiFillGithub />}
                        link="https://github.com/Shubham-Pagar"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<AiFillInstagram />}
                        link="https://instagram.com/bunty599"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Shubham Pagar | All rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Footer;