import { useState } from "react";

export function BookContacts() {
  const [bookingData, setBookingData] = useState({
    name: null,
    surname: null,
    email: null,
  });
  function handleInputChange(event) {
    event.preventdefault();
    const value = event.target.value;
    const name = event.target.name;
    setBookingData({
      ...bookingData,
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
        <div>Email</div>
        <input type="email" name="email"></input>
        <button type="submit">Next step</button>
      </form>
    </div>
  );
}
