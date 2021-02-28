import "./CourseAbout.css";

function CourseAbout() {
  return (
    <div className="course-about__content">
      <h3>H3 - ¿De qué trata este curso?</h3>
      <p className="course-about__content--paragraph">
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
        mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in
        non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in.
        Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper
        diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra.
        Purus sagittis est felis sapien in. Auctor tellus, in mauris mi,
        facilisi arcu sedut.
      </p>
      <select className="select-about" name="link" id="link">
        <option value="textlink">textlink</option>
        <option value="textlink1">textlink1</option>
      </select>
    </div>
  );
}

export default CourseAbout;
