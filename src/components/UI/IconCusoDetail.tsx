import "./IconCursoDetail.css";

function IconCursoDetail() {
  return (
    <div className="curso-description__info">
      <div className="curso-description__info--data">
        <i className="ri-bar-chart-line"></i>
        <p>Nivel 1</p>
      </div>
      <div className="curso-description__info--data">
        <i className="ri-user-fill"></i>
        <p>123 Usuarios</p>
      </div>
      <div className="curso-description__info--data">
        <i className="ri-star-fill"></i>
        <p>4.8</p>
      </div>
    </div>
  );
}

export default IconCursoDetail;
