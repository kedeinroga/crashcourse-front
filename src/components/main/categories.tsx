import "./categories.css";
import Pagination from "../UI/Pagination";
import CardCategory from "./CardCategory";

function Categories() {
  return (
    <div className="categories__content">
      <h4>Title H4 - Categorias</h4>
      <div className="categories__cards">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
      <Pagination />
    </div>
  );
}

export default Categories;
