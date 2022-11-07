import { useState } from "react";

export function PassengersDetails() {
  const [passengersData, setPassengersData] = useState({
    name: null,
    surname: null,
    birthday: null,
    documentType: null,
    documentNumber: null,
    luggage: null,
    class: null,
  });
  function handleInputChange(event) {
    event.preventdefault();
    const value = event.target.value;
    const name = event.target.name;
    setPassengersData({
      ...passengersData,
      [name]: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleInputChange}>
        <div>Name</div>
        <input type="text" name="name"></input>
        <div>Surname</div>
        <input type="text" name="surname"></input>
        <div>Birthday</div>
        <input type="date" name="birthday"></input>
        <div>Document type</div>
        <select name="documentType">
          <option>Id Card</option>
          <option>Passport</option>
        </select>
        <div>Document number</div>
        <input type="text" name="documentNumber"></input>
        <div>Luggage</div>
        <select name="luggage">
          <option>Cabin</option>
          <option>Checked</option>
        </select>
        <div>Class</div>
        <select name="class">
          <option>Economy</option>
          <option>First class</option>
        </select>
        <div>Seat preference</div>
        <select name="seat">
          <option>Aisle</option>
          <option>Middle</option>
          <option>Window</option>
        </select>
      </form>
    </div>
  );
}
