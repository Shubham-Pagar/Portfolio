import React from "react";
import './style.scss';
import Cloud from '../../Images/cloud.png';
import CloudSoft from "../../Images/cloud-soft.png";
import Navigation from './navigation-bar';
import IntroContent from './intro-content/index'
const Index = () => {

    return (
        <div className="Intro_section">
            <div className="vector_bg" id="parallax">

            </div>
            <img src={Cloud} className="Cloud" alt="" />
            <img src={CloudSoft} className="cloud_soft" alt="" />
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
}
export default Index;