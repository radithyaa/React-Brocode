import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <h1 className="text-3xl">Color Picker</h1>
      <div style={{ backgroundColor: color }} className="w-48 h-48 my-3"></div>
      <input type="color" value={color} onChange={handleColorChange} />
      <h1>Current Color: {color}</h1>
    </div>
  );
}
