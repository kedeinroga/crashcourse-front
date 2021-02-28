import "./CourseProjects.css";
import CardProject from "./CardProject";

function CourseProjects() {
  return (
    <div className="project-content">
      <p className="project-content__title">Proyectos del curso</p>
      <div className="cards-content">
        <CardProject className="card-big" />
        <div className="cards-content__desktop">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  );
}

export default CourseProjects;
