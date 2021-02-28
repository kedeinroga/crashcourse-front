import "./Ratings.css";
import RatingStar from "../UI/RatingStar";
import RatingComnet from "../UI/RatingComnet";

function Ratings() {
  return (
    <div className="ratings-content">
      <p className="ratings-content__title">Valoraciones</p>
      <RatingStar />
      <RatingComnet />
    </div>
  );
}

export default Ratings;
