import React from 'react';
import './style.scss';
import Section from '../../Components/Shared/Section';
import TechIcon from '../../Images/tech-icons.png'
import CallToAction from '../../Components/Shared/CallToAction'
import { AiOutlineCloudDownload } from 'react-icons/ai';
const Skills = () => {
    return (
        <Section background="dark" id='skills'>
            <div className='skills-content-wrapper'>
                <div className="left-col">
                    <img src={TechIcon} alt="JS,HTML,React,CSS" />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                    </p>
                    <CallToAction text="Download cv" icon={<AiOutlineCloudDownload />} />

                </div>
            </div>
        </Section>
    );
}


export default Skills;