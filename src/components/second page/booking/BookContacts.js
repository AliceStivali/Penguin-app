import { useState } from "react";

export function BookContacts() {
  // const [bookingData, setBookingData] = useState({
  //   name: null,
  //   surname: null,
  //   email: null,
  // });
  // function handleInputChange(event) {
  //   event.preventdefault();
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setBookingData({
  //     ...bookingData,
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
        <div>Email</div>
        <input type="email" name="email" className="book-form-input"></input>
      </form>
    </div>
  );
}
