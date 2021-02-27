import "./CardCurso.css";
import Button from "../UI/Buttons/Button";
import IconCursoDetail from "../UI/IconCusoDetail";

function CardCurso() {
  return (
    <div className="card-curso">
      <div className="curso-banner">
        <div className="curso-tag">TAG VENTA</div>
      </div>
      <div className="curso-description">
        <div className="curso-description__name">Nombre del curso </div>
        <p className="curso-description__prof">Profesor del curso</p>
        <IconCursoDetail />
        <div className="curso-cost">
          <p className="ofert-price">CO$164,434</p>
          <p className="real-price">co$349,929</p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default CardCurso;
