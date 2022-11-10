import { useState } from "react";

let today = new Date().toISOString().split("T")[0];
export function BillingInfo() {
  // const [billingData, setBillingData] = useState({
  //   fullName: null,
  //   cardNumber: null,
  //   cvv: null,
  //   expiration: null,
  // });
  // function handleInputChange(event) {
  //   event.preventdefault();
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setBillingData({
  //     ...billingData,
  //     [name]: value,
  //   });
  // }
  return (
    <div>
      <h5>Billing info</h5>
      <form>
        <div>Full name</div>
        <input type="text" name="fullName" className="book-form-input"></input>
        <div>Card number</div>
        <input
          className="book-form-input"
          type="text"
          name="cardNumber"
          placeholder="1234 5678 1234 5678"
          inputmode="numeric"
          pattern="[0-9\s]{13,19}"
        ></input>
        <div>CVV</div>
        <input
          className="book-form-input"
          type="number"
          min="100"
          max="999"
          required
          name="cvv"
          placeholder="***"
        ></input>
        <div>Expiration date</div>
        <input
          className="book-form-input"
          type="date"
          min={today}
          name="expiration"
        ></input>
      </form>
    </div>
  );
}
