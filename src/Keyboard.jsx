import React, { useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function VirtualKeyboard({ onChange }) {
  const keyboard = useRef(null);

  return (
    <Keyboard
      keyboardRef={(r) => (keyboard.current = r)}
      onChange={handleChange}
      inputName="default"
    />
  );
}
