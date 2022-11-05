export function PassengersDetails() {
  return (
    <div>
      <form>
        <div>Name</div>
        <input type="text" name="name"></input>
        <div>Surname</div>
        <input type="text" name="surname"></input>
        <div>Birthday</div>
        <input type="date" name="birthday"></input>
        <div>Document type</div>
        <input type="select" name="document-type"></input>
        <div>Document number</div>
        <input type="text" name="document-number"></input>
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
      </form>
    </div>
  );
}
