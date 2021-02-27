import "./PaginationDesktop.css";

function PaginationDesktop() {
  return (
    <div className="pagination-desk">
      <ul>
        <i className="ri-arrow-left-line"></i>
        <div className="pagination-desk__numbers">
          <p>Página</p>
          <select name="page" id="page">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p>de 5</p>
        </div>
        <i className="ri-arrow-right-line"></i>
      </ul>
    </div>
  );
}

export default PaginationDesktop;
