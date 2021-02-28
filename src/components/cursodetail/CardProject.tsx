import "./CardProject.css";

function CardProject({ className = "" }) {
  return (
    <div className={`card-project ${className}`}>
      <div className="card-project__data">
        <div className="card-project__data--photo"></div>
        <p className="card-project__data--user">user_name</p>
      </div>
    </div>
  );
}

export default CardProject;
