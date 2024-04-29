import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProjects } from '../../MockData/MockData';

import Widget from '../../Components/Widget/Widget';
import VideoCard from '../../Components/VideoCard/VideoCard';
import AssignJudge from '../../Components/AsignJudge/AsignJudge';
import ProjectScore from '../../Components/ProjectScore/ProjectScore';
import ProjectMembers from '../../Components/ProjectMembers/ProjectMembers';

function ProjectPage({ setPageTitle }) {
  const { projectId } = useParams(); // Get the project ID from URL parameter
  const project = mockProjects.find(project => project.id.toString() === projectId); // Find the project by ID

  useEffect(() => {
    // Update the title when the component mounts
    if (project) {
      setPageTitle(project.title);
    }
  }, [project, setPageTitle]);

  const { poster, video, description } = project;

  // Function to handle descalification
  const handleDescalify = () => {
    const confirmed = window.confirm("Estas seguro de que quieres descalificar el proyecto?");
    if (confirmed) {
      // Add your logic to descalify the project here
    }
  };

  // If project is not found, display the project ID
  if (!project) {
    return <h1>Project with ID "{projectId}" not found!</h1>;
  }

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-6">
            <Widget title={"Poster"} centered={true} content={<img style={{height:"625px"}} src={`${process.env.PUBLIC_URL}/${poster}`} alt="Project Image" />} />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <Widget title={"Video"} centered={true} content={<VideoCard url={video} />} />
              </div>
              <div className="col-lg-12">
                <Widget title={"Project Description"} centered={true} content={<p style={{marginLeft:"10px", marginRight:"10px"}}>{description}</p>} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Widget title={"Juez Encargado"} centered={true} content={<AssignJudge categories={project.categories} />} />
          </div>
          <div className="col-lg-6">
            <Widget title={"Equipo"} centered={true} content={<ProjectMembers project={project} />} />
          </div>
          <div className="col-lg-3">
            <Widget title={"Calificación"} centered={true} content={<ProjectScore score={project.score} isDisqualified={project.isDisqualified} allProjects={mockProjects} />} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12 d-flex justify-content-center mt-3">
            <button className="btn btn-lg btn-primary mx-2 custom-primaty-btn">Calificar</button>
            <button className="btn btn-lg btn-danger mx-2" onClick={handleDescalify}>Descalificar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
