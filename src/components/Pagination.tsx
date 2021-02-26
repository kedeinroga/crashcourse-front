import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <ul>
        <i className="ri-arrow-left-s-line"></i>
        <div className="pagination__numbers">
          <span>01</span>
          <p>/03</p>
        </div>
        <i className="ri-arrow-right-s-line"></i>
      </ul>
    </div>
  );
}

export default Pagination;
