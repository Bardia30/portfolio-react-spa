import React from 'react'
import ring from '../../assets/images/pattern-rings.svg';
import Skill from './Skill';
import './Skills.scss';

//hardcoded for now
function Skills() {

    //temporary array of skills
    const skills = [
        {skill:'HTML', years: 4},
        {skill:'CSS', years: 4},
        {skill:'JavaScript', years: 4},
        {skill:'Accessibility', years: 4},
        {skill:'React', years: 3},
        {skill:'Sass', years: 3},
    ]
    return (
        <div className='skills__outer-section'>
            <div className='skills'>
                {skills.map(skill => (
                    <Skill 
                        skill={skill.skill}
                        years={skill.years}
                    />
                ))}
                {/* <section className='skills__skill'>
                    <h3 className='skills__technology'>HTML</h3>
                    <p className='skills__experience'><span className='skills__years'>4 </span>years of experience</p>
                </section>
                <section className='skills__skill'>
                    <h3 className='skills__technology'>CSS</h3>
                    <p className='skills__experience'><span className='skills__years'>4 </span>years of experience</p>
                </section>
                <section className='skills__skill'>
                    <h3 className='skills__technology'>JavaScript</h3>
                    <p className='skills__experience'><span className='skills__years'>4 </span>years of experience</p>
                </section>
                <section className='skills__skill'>
                    <h3 className='skills__technology'>Accessibility</h3>
                    <p className='skills__experience'><span className='skills__years'>4 </span>years of experience</p>
                </section>
                <section className='skills__skill'>
                    <h3 className='skills__technology'>React</h3>
                    <p className='skills__experience'><span className='skills__years'>3 </span>years of experience</p>
                </section>
                <section className='skills__skill'>
                    <h3 className='skills__technology'>Sass</h3>
                    <p className='skills__experience'><span className='skills__years'>3 </span>years of experience</p>
                </section> */}
            </div>
            <img className='skills__rings' src={ring} alt="rings" />
        </div>
        
    )
}

export default Skills