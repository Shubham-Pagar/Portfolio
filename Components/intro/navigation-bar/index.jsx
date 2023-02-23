import React from "react";
import './style.scss';
import Logo from '../../../Images/logo.jpg';
import CallToAction from "../../Shared/CallToAction";
import { ScrollToSection } from "../../Utils/helper";
const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img src={Logo} alt="Logo" />

            </div>
            <div className="navigation">
                <span className="navigation-item" onClick={() => ScrollToSection('skills')}>Skills</span>
                <span className="navigation-item" onClick={() => ScrollToSection('portfolio')}>Portfolio</span>
                <span className="navigation-item" onClick={() => ScrollToSection('Blogs')}>Blogs & Articals</span>

                <CallToAction text="Contact me" action={() => ScrollToSection('contact')} />
            </div>
        </div>
    );
}
export default Navigation;