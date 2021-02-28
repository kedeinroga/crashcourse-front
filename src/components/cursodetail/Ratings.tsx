import "./Ratings.css";
import RatingStar from "../UI/RatingStar";
import RatingComent from "../UI/RatingComent";

function Ratings() {
  return (
    <div className="ratings-content">
      <p className="ratings-content__title">Valoraciones</p>
      <RatingStar />
      <RatingComent />
    </div>
  );
}

export default Ratings;
