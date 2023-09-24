import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Project from './Project';

import './Projects.scss';

//make button another component
//projects are hard coded for now
// make each card a component
//technologies p elements enter programmatically
export default function Projects() {
    
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5050')
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => console.log(err.message));
    }, [])

    return (
        <div className='projects'>
            <section className='projects__upper'>
                <h1 className='projects__title'>Projects</h1>
                <button className='projects__cta btn'>contact me</button>
            </section>
            <div className='projects__cards-section'>
                {projects.map(project => (
                    <Project 
                        key={project.id}
                        image={`http://localhost:5050/${project.image}`}
                        title={project.title}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}
