import React from "react";
import './style.scss';
import Hand from '../../../Images/hand.png';
import Girl from '../../../Images/girl.png';
import CallToAction from '../../Shared/CallToAction';
import { FaUser } from 'react-icons/fa';
import { BsAwardFill } from "react-icons/bs";
import { ScrollToSection } from "../../Utils/helper";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={Hand} alt='' />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Shubham Pagar</span>
                    </h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simplContrary to popular belief, Lorem Ipsum is not simpl line in section.
                    </p>
                    <CallToAction text={'Contact me'} action={() => ScrollToSection('contact')} />
                </div>
                <div className="right-col">
                    <img src={Girl} alt="Shubham Pagar" />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best design award</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <span className="text">Shubham Pagar
                            <div className="text">Frontend Developer</div>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;