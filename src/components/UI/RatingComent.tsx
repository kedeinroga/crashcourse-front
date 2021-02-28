import "./RatingComent.css";

function RatingComent() {
  return (
    <div className="rating-coment__content">
      <div className="rating-coment__user">
        <div className="rating-coment__user--photo"></div>
        <div className="rating-coment__user--data">
          <p>Usuario213</p>
          <div className="rating-coment__user--stars">
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill"></i>
          </div>
        </div>
      </div>
      <p className="rating-coment__content--body">
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
        mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in
        non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in.
        Auctor tellus, in mauris mi, facilisi arcu sed ut.
      </p>
    </div>
  );
}

export default RatingComent;
