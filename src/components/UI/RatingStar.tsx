import "./RatingStar.css";

function RatingStar() {
  return (
    <div className="rating-star__content">
      <div className="rating-star__score">
        <p className="rating-star__score--value">4.8</p>
        <div className="rating-star__score--media">
          <div>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill start-active"></i>
            <i className="ri-star-fill"></i>
          </div>
          <p>Media total</p>
        </div>
      </div>
      <div className="rating-star__content--barstar">
        <div className="rating-star__bars">
          <div className="rating-star__bars--level">
            <div className="rating-star__bars--value5"></div>
          </div>
          <div className="rating-star__bars--level">
            <div className="rating-star__bars--value4"></div>
          </div>
          <div className="rating-star__bars--level">
            <div className="rating-star__bars--value3"></div>
          </div>
          <div className="rating-star__bars--level">
            <div className="rating-star__bars--value2"></div>
          </div>
          <div className="rating-star__bars--level">
            <div className="rating-star__bars--value1"></div>
          </div>
        </div>
        <div className="rating-star__stars">
          <div className="rating-star__stars--content">
            <div>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="rating-star__stars--value">90%</p>
          </div>
          <div className="rating-star__stars--content">
            <div>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="rating-star__stars--value">5%</p>
          </div>
          <div className="rating-star__stars--content">
            <div>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="rating-star__stars--value">2%</p>
          </div>
          <div className="rating-star__stars--content">
            <div>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="rating-star__stars--value">2%</p>
          </div>
          <div className="rating-star__stars--content">
            <div>
              <i className="ri-star-fill start-active"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="rating-star__stars--value">1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingStar;
