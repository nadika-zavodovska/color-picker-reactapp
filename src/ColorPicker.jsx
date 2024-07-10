import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFF");

  function handleColorChange(event) {
    console.log(event.target);
    setColor(event.target.value);
  }

  return (
    <div className="ColorPicker">
      <h1>Color Picker</h1>
      <h2>Selected color - {color}</h2>
      <div
        className="color-picker__display"
        style={{ backgroundColor: color }}
      ></div>
      <div className="color-picker-selection">
        <h2>Select your color 😊</h2>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
}

export default ColorPicker;
