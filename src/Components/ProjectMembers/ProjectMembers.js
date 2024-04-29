// ProjectMembers.js
import React from "react";
import { students, professors } from "../../MockData/MockData"; // Assuming mockData.js contains your mock data
import "./ProjectMembers.css";

const ProjectMembers = ({ project }) => {
  const getStudentById = (id) => {
    return students.find((student) => student.id === id);
  };

  const getProfessorById = (id) => {
    return professors.find((professor) => professor.id === id);
  };

  const projectLeader = getStudentById(project.leader);
  const projectMembers = project.members.map((memberId) =>
    getStudentById(memberId)
  );
  const projectTeachers = project.teachers.map((teacherId) =>
    getProfessorById(teacherId)
  );

  return (
    <div className="project-members-container">
      <div className="project-leader-container">
        <div className="member-container">
          <p className="member-name">{projectLeader.name}</p>
          <img
            src={`${process.env.PUBLIC_URL}/${projectLeader.profileImg}`}
            alt={projectLeader.name}
            className="member-img"
          />
        </div>
        <div className="project-members-list">
          {projectMembers.map((member) => (
            <div key={member.id} className="member-container">
              <p className="member-name">{member.name}</p>
              <img
                src={`${process.env.PUBLIC_URL}/${member.profileImg}`}
                alt={member.name}
                className="member-img"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="project-teachers-list">
        {projectTeachers.map((teacher) => (
          <div key={teacher.id} className="teacher-container">
            <p className="member-name">{teacher.name}</p>
            <img
              src={`${process.env.PUBLIC_URL}/${teacher.profileImg}`}
              alt={teacher.name}
              className="member-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMembers;
