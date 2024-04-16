import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './projects.css';


const URI = 'http://localhost:8000/projects/'

const CompShowProjects = () =>{
    const [projects, setProject] = useState([])
    useEffect( () =>{
        getProjects()
    },[])

    //procedimiento para mostrar projects
    const getProjects = async () => {
        const res = await axios.get(URI)
        setProject(res.data)
    }
    const deleteProjects = async (id) => {
        axios.delete(`${URI}${id}`)
        getProjects()
    }

    return(
        <div className='container tabla'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Link Video</th>
                                <th>Link Poster</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project)=>(
                                <tr key={project.id}>
                                    <td>{project.title}</td>
                                    <td>{project.description}</td>
                                    <td>{project.linkVideo}</td>
                                    <td>{project.linkPoster}</td>
                                    <td>{project.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowProjects