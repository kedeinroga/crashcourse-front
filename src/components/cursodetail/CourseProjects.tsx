import "./CourseProjects.css";
import CardProject from "./CardProject";

function CourseProjects() {
  return (
    <div className="project-content">
      <p className="project-content__title">Proyectos del curso</p>
      <div className="cards-content">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  );
}

export default CourseProjects;
