import "./CursoInfo.css";

import IconCursoDetail from "../UI/IconCusoDetail";
import CursoPrice from "../UI/CursoPrice";

function CursoInfo() {
  return (
    <div>
      <h2>Title H2 - Nombre del curso</h2>
      <CursoPrice />
      <p>
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
        mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in
        non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in.
        Auctor tellus, in mauris mi, facilisi arcu sedut.
      </p>
      <IconCursoDetail />
    </div>
  );
}

export default CursoInfo;
