import { useState } from "react";

export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    model: "Ford",
    make: "Mustang",
  });

  function handleYearChange(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  return (
    <div>
      <h1>
        Your favorite car is:{" "}
        {`${car.make}
        ${car.model}
        ${car.year}`}
      </h1>
      <label>Year:</label>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <label>Model:</label>
      <input type="text" value={car.model} onChange={handleModelChange} />
      <label>Make:</label>
      <input type="text" value={car.make} onChange={handleMakeChange} />
    </div>
  );
}
