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
        <input type="select" name="documentType"></input>
        <div>Document number</div>
        <input type="text" name="documentNumber"></input>
        <div>Luggage</div>
        <input type="select" name="luggage"></input>
        <div>Class</div>
        <input type="select" name="class">
          <option>Economy</option>
          <option>First class</option>
        </input>
        <div>Seat preference</div>
        <input type="select" name="seat">
          <option>Aisle</option>
          <option>Middle</option>
          <option>Window</option>
        </input>
        <button>Next step</button>
      </form>
    </div>
  );
}
