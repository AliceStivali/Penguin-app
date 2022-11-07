import { useState } from "react";

let today = new Date().toISOString().split("T")[0];
export function BillingInfo() {
  const [billingData, setBillingData] = useState({
    fullName: null,
    cardNumber: null,
    cvv: null,
    expiration: null,
  });
  function handleInputChange(event) {
    event.preventdefault();
    const value = event.target.value;
    const name = event.target.name;
    setBillingData({
      ...billingData,
      [name]: value,
    });
  }
  return (
    <div>
      <form>
        <div>Full name</div>
        <input type="text" name="fullName"></input>
        <div>Card number</div>
        <input type="text" name="cardNumber"></input>
        <div>CVV</div>
        <input type="number" min="100" max="999" required name="cvv"></input>
        <div>Expiration date</div>
        <input type="date" min={today} name="expiration"></input>
      </form>
    </div>
  );
}
