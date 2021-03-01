import "./PaymentMethod.css";
import card from "../../assets/images/credit-card.svg";

function PaymentMethod() {
  return (
    <div>
      <p>Método de pago</p>
      <form>
        <label className="container">
          Tarjeta
          <input type="radio" defaultChecked name="radio" />
          <span className="checkmark"></span>
        </label>
        <img src={card} alt="card" />
        <label>Correo electrónico</label>
        <input type="text" />
        <label>Número de tarjeta</label>
        <input type="text" />
        <label>Fecha de vencimiento</label>
        <input type="text" />
        <label>Código de seguridad</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default PaymentMethod;
