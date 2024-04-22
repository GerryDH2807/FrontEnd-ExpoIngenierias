import React from 'react';
import './ProjectCard.css';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { mockProjects } from '../../MockData/MockData';

function ProjectCard({ project }) {
    const { title, img, categories, review } = project; // Destructure project object
    const statusClassName = review ? 'review-true' : 'review-false'; // Determine class based on review status
    const StatusIcon = review ? AiOutlineCheckCircle : AiOutlineCloseCircle; // Choose icon based on review status
    return (
      <div className={`card mb-4`} style={{ width: "18rem" }}>
        <div className={`project-card-status ${statusClassName}`}>
          <StatusIcon /> {/* Render dynamic icon */}
        </div>
        <img src={img} className="card-img-top" alt="Project Image" />
        <div className="card-body project-card-content">
          <h5 className="card-title">{title}</h5>
          <div className="category-container">
            {categories.map((category, index) => (
              <span key={index} className="badge">{category}</span>
            ))}
          </div>
          <a href="#" className="btn btn-primary">Abrir</a>
        </div>
      </div>
    );
}

export default function ProjectCardsList({ filter, searchTerm }) {
  let filteredProjects = mockProjects;

  // Apply filter based on selected edition
  if (filter) {
    filteredProjects = filteredProjects.filter(project => project.edition === filter);
  }

  // Apply search filter
  if (searchTerm) {
    filteredProjects = filteredProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="col mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
