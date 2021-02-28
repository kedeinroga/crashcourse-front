import "./CursoInfo.css";

import IconCursoDetail from "../UI/IconCusoDetail";
import Button from "../UI/Buttons/Button";
import AddCart from "../UI/Buttons/AddCart";
import CursoPrice from "../UI/CursoPrice";
import CardInfoProf from "./CardInfoProf";

function CursoInfo() {
  return (
    <div className="info-curso__content">
      <h2>Title H2 - Nombre del curso</h2>
      <div className="mobile">
        <CursoPrice />
      </div>
      <p>
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
        mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in
        non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in.
        Auctor tellus, in mauris mi, facilisi arcu sedut.
      </p>
      <div className="info-curso__content--icons">
        <IconCursoDetail />
      </div>
      <CardInfoProf />
      <div className="info-curso__content--buttons mobile">
        <Button />
        <AddCart />
      </div>
    </div>
  );
}

export default CursoInfo;
