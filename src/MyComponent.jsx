import { useRef, useState } from "react";

export default function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Mango"]);
  const foodInputRef = useRef(null);

  function handleAddFood() {
    const newFood = foodInputRef.current.value;
    foodInputRef.current.value = "";

    if (!newFood) {
      return;
    }
    setFoods((foods) => [...foods, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>List Of Food</h1>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" ref={foodInputRef} placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}
