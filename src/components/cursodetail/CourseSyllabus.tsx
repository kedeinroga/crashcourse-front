import "./CourseSyllabus.css";

function CourseSyllabus() {
  return (
    <div className="sylabus-content">
      <h3>H3 - Temario del curso</h3>
      <ul>
        <p className="sylabus-content__title">Introducción</p>
        <li className="sylabus-content__item">
          1. Un cuento de superación con todo
        </li>
        <li className="sylabus-content__item">2. El no ilustrador</li>
        <li className="sylabus-content__item">3. Break 1: Súbete al robot</li>
      </ul>

      <ul>
        <p className="sylabus-content__title">Bildungsroman</p>
        <li className="sylabus-content__item">4. Objetivo de Branding</li>
        <li className="sylabus-content__item">5. Público Objetivo</li>
        <li className="sylabus-content__item">6. Selecciona tu Red Social</li>
      </ul>

      <ul>
        <p className="sylabus-content__title">¿Qué hacer con tu vida?</p>
        <li className="sylabus-content__item">7. Objetivo de Branding</li>
        <li className="sylabus-content__item">8. Público Objetivo</li>
        <li className="sylabus-content__item">9. Selecciona tu Red Social</li>
      </ul>

      <select className="select-sylabus" name="link" id="link">
        <option value="textlink">textlink</option>
        <option value="textlink1">textlink1</option>
      </select>
    </div>
  );
}

export default CourseSyllabus;
