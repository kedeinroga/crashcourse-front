import "./PaymentMethod.css";
import card from "../../assets/images/credit-card.svg";
import pagoefectivo from "../../assets/images/pago-efectivo.svg";
import pay from "../../assets/images/pay.svg";
import pal from "../../assets/images/pal.svg";
import Button from "../UI/Buttons/Button";

function PaymentMethod() {
  return (
    <div className="payment-method">
      <p className="payment-method__title">Método de pago</p>
      <form className="card-method__form">
        <label className="payment-method__label">
          <input type="radio" defaultChecked name="tarjeta" />
          <p>Tarjeta</p>
          <img src={card} alt="card" />
        </label>
        <label>Correo electrónico</label>
        <input className="form-inout__text" type="text" />
        <label>Número de tarjeta</label>
        <input className="form-inout__text" type="text" />
        <label>Fecha de vencimiento</label>
        <input className="form-inout__text" type="text" />
        <label>Código de seguridad</label>
        <input className="form-inout__text" type="text" />
      </form>
      <label className="payment-method__label other">
        <input type="radio" name="paypal" />
        <img src={pay} alt="pay" />
        <img src={pal} alt="pal" />
      </label>
      <label className="payment-method__label other">
        <input type="radio" name="pagoefectivo" />
        <img src={pagoefectivo} alt="Pago Efectivo" />
      </label>

      <label className="terms">
        <input type="checkbox" />
        <p className="terms-text">
          Acepto expresamente todos los Términos y Condiciones{" "}
        </p>
      </label>
      <div className="button-payment__content">
        <Button />
      </div>
    </div>
  );
}

export default PaymentMethod;
