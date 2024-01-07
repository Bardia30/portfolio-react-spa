const { v4: uuidv4} = require('uuid');
const fs = require('fs');
const path = require('path')




try {
    const filePath = path.join(__dirname, '/', 'projects.json');
    const data = fs.readFileSync(filePath, 'utf8')
    
    const projectsArray = JSON.parse(data);
    const updatedProjects = projectsArray.map(project => {
        return {
            id: uuidv4(),
            title: project.title,
            image: project.image,
            technologies: project.technologies
        }
    })
        
    fs.writeFileSync(filePath, JSON.stringify(updatedProjects));
} catch (err) {
    console.error(err);
}


try {
    const filePath = path.join(__dirname, '/', 'skills.json');
    const data = fs.readFileSync(filePath, 'utf8')
    
    const skillsArray = JSON.parse(data);
    const updatedSkills = skillsArray.map(project => {
        return {
            id: uuidv4(),
            skill: project.skill,
            years: project.years,
        }
    })
        
    fs.writeFileSync(filePath, JSON.stringify(updatedSkills));
} catch (err) {
    console.error(err);
}