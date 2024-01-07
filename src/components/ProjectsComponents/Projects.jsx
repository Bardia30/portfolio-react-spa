import Project from './Project';
import './Projects.scss';
import projects from '../../data/projects.json';
import { Link } from 'react-scroll';

export default function Projects() {


    // const [projects, setProjects] = useState([]);

    // useEffect(()=> {
    //     axios.get('https://bardiadevapi.onrender.com')
    //         .then(res => {
    //             setProjects(res.data)
    //         })
    //         .catch(err => console.log(err.message));
    // }, [])

    return (
        <div className='projects'>
            <section className='projects__upper'>
                <h1 className='projects__title'>Projects</h1>
                <Link to='contact' smooth={true} duration={500}><button className='projects__cta btn'>contact me</button></Link>
            </section>
            <div className='projects__cards-section'>
                {projects.map(project => (
                    <Project 
                        key={project.id}
                        image={`https://bardiadevapi.onrender.com/${project.image}`}
                        title={project.title}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}
