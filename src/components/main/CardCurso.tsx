import "./CardCurso.css";
import Button from "../UI/Buttons/Button";
import IconCursoDetail from "../UI/IconCusoDetail";
import CursoPrice from "../UI/CursoPrice";

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
        <CursoPrice />
        <Button />
      </div>
    </div>
  );
}

export default CardCurso;
