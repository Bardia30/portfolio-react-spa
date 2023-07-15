import React from 'react'
import { v4 } from 'uuid';
import projectOne from '../../assets/images/thumbnail-project-1-large.webp';
import projectTwo from '../../assets/images/thumbnail-project-2-large.webp';
import projectThree from '../../assets/images/thumbnail-project-3-large.webp';
import projectFour from '../../assets/images/thumbnail-project-4-large.webp';
import projectFive from '../../assets/images/thumbnail-project-5-large.webp';
import projectSix from '../../assets/images/thumbnail-project-6-large.webp';
import Project from './Project';

import './Projects.scss';

//make button another component
//projects are hard coded for now
// make each card a component
//technologies p elements enter programmatically
export default function Projects() {

    const projects = [
        {
            id: v4(),
            title: "design portfolio",
            image: projectOne,
            technologies: [
                "html",
                "css"
            ]
        },
        {
            id: v4(),
            title: "e-learning landing page",
            image: projectTwo,
            technologies: [
                "html",
                "css"
            ]
        },
        {
            id: v4(),
            title: "todo web app",
            image: projectThree,
            technologies: [
                "html",
                "css",
                "javascript"
            ]
        }, 
        {
            id: v4(),
            title: "entertainment app",
            image: projectFour,
            technologies: [
                "html",
                "css",
                "javascript"
            ]
        },
        {
            id: v4(),
            title: "memory game",
            image: projectFive,
            technologies: [
                "html",
                "css",
                "javascript"
            ]
        },
        {
            id: v4(),
            title: "art gallery showcase",
            image: projectSix,
            technologies: [
                "html",
                "css",
                "javascript"
            ]
        }
    ]

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
                        image={project.image}
                        title={project.title}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}
