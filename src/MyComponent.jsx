import { useState } from "react";

export default function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState(new Date().getFullYear());

  function handleAddCar() {
    //TODO: Implemet add car logic
    const newCar = {
      make: carMake,
      model: carModel,
      year: carYear,
    };

    if (!carMake || !carModel || !carYear) {
      alert("Please fill in all fields before adding a car.");
      return;
    }

    setCars((cars) => [...cars, newCar]);

    // Reset form inputs
    setCarMake("");
    setCarModel("");
    setCarYear(new Date().getFullYear());
  }
  function handleRemoveCar(index) {
    // TODO: Implement removing car logic
    setCars((cars) => cars.filter((_, i) => i !== index));
  }
  function handleAddCarYear(event) {
    setCarYear(event.target.value);
  }
  function handleAddCarModel(event) {
    setCarModel(event.target.value);
  }
  function handleAddCarMake(event) {
    setCarMake(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.make} {car.model} {car.year}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Make"
        value={carMake}
        onChange={handleAddCarMake}
      />
      <input
        type="text"
        placeholder="Model"
        value={carModel}
        onChange={handleAddCarModel}
      />
      <input
        type="number"
        placeholder="Year"
        value={carYear}
        onChange={handleAddCarYear}
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
