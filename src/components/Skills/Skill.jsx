import React from 'react';
import './Skills.scss';

function Skill({ skill, years }) {
    return (
        <section className='skills__skill'>
            <h3 className='skills__technology'>{skill}</h3>
            <p className='skills__experience'><span className='skills__years'>{years} </span>years of experience</p>
        </section>
    )
}

export default Skill