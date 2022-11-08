import { useState } from "react";

export function PassengerDetails() {
  // const [passengersData, setPassengersData] = useState({
  //   name: null,
  //   surname: null,
  //   birthday: null,
  //   documentType: null,
  //   documentNumber: null,
  //   luggage: null,
  //   class: null,
  // });
  // function handleInputChange(event) {
  //   event.preventdefault();
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setPassengersData({
  //     ...passengersData,
  //     [name]: value,
  //   });
  // }

  return (
    <div>
      <form>
        <div>Name</div>
        <input type="text" name="name" className="book-form-input"></input>
        <div>Surname</div>
        <input type="text" name="surname" className="book-form-input"></input>
        <div style={{ display: "flex", gap: "2rem", margin: "1rem 0" }}>
          <div>
            <div>Birthday</div>
            <input
              type="date"
              name="birthday"
              className="book-form-input"
            ></input>
          </div>
          <div>
            <div>Luggage</div>
            <select name="luggage" className="book-form-input">
              <option>Cabin</option>
              <option>Checked</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", margin: "1rem 0" }}>
          <div>
            <div>Document type</div>
            <select name="documentType" className="book-form-input">
              <option>Id Card</option>
              <option>Passport</option>
            </select>
          </div>
          <div>
            <div>Document number</div>
            <input
              className="book-form-input"
              type="text"
              name="documentNumber"
              placeholder="CA12345AA"
            ></input>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", margin: "1rem 0" }}>
          <div>
            <div>Class</div>
            <select name="class" className="book-form-input">
              <option>Economy</option>
              <option>First class</option>
            </select>
          </div>
          <div>
            <div>Seat preference</div>
            <select name="seat" className="book-form-input">
              <option>Aisle</option>
              <option>Middle</option>
              <option>Window</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
