import "./FormInput.css";

function FormInput() {
  return (
    <form className="from-filters">
      <div>
        <label htmlFor="category">Categoría:</label>
        <select name="category" id="category">
          <option value="category1">category1</option>
          <option value="category2">category2</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select name="category" id="category">
          <option value="category1">category1</option>
          <option value="category2">category2</option>
        </select>
      </div>
      <button className="button-filter">Aplicar filtros</button>
    </form>
  );
}

export default FormInput;
