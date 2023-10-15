import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ring from '../../assets/images/pattern-rings.svg';
import Skill from './Skill';
import './Skills.scss';

//hardcoded for now
function Skills() {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(()=> {
        axios.get('https://bardiadevapi.onrender.com/skills')
            .then(res => {
                setSkillsData(res.data);
            })
    }, [])
    
    return (
        <div className='skills__outer-section'>
            <div className='skills'>
                {skillsData.map(skill => (
                    <Skill
                        key={skill.id} 
                        skill={skill.skill}
                        years={skill.years}
                    />
                ))}
            </div>
            <img className='skills__rings' src={ring} alt="rings" />
        </div>
        
    )
}

export default Skills