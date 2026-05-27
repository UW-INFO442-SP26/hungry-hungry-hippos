import React, { useEffect, useRef, useState, useCallback } from "react";
import { KeyboardReact as Keyboard } from "react-simple-keyboard";
import "simple-keyboard/build/css/index.css";

const WORDS = [
  "apple", "banana", "orange", "hippo", "react", 
  "javascript", "keyboard", "speed", "practice",
];

export default function Practice() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [isAutoReadEnabled, setIsAutoReadEnabled] = useState(false); 
  const [pressedKey, setPressedKey] = useState(null);

  const inputRef = useRef(null);
  const keyboardRef = useRef(null);

  const current = WORDS[index % WORDS.length];

  // speech logic
  const handleSpeak = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(current);
      utterance.rate = 0.9; 
      window.speechSynthesis.speak(utterance);
    }
  }, [current]);

  // auto-read
  useEffect(() => {
    if (isAutoReadEnabled) {
      handleSpeak();
    }
  }, [index, isAutoReadEnabled, handleSpeak]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [index]);

  useEffect(() => {
    function handleKeyDown(e) { setPressedKey(e.key.toLowerCase()); }
    function handleKeyUp() { setPressedKey(null); }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  function handleChange(value) {
    setInput(value);
    if (value === current) {
      setCompleted((c) => c + 1);
      setInput("");
      setIndex((i) => i + 1);
      keyboardRef.current.clearInput();
    }
  }

  return (
    <>
      <main style={{
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "2rem", paddingBottom: "280px", minHeight: "calc(100vh - 64px)",
      }}>
        <div style={{ width: "100%", maxWidth: 560, marginTop: "2rem" }}>
          <h1 style={{ textAlign: "center", marginTop: 0, fontFamily: "'OpenDyslexic', sans-serif", lineHeight: "50pt",  }}>Time to practice!</h1>

          {/* Controls: Toggle for Auto-Read */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", display: "flex", alignItems: "center", cursor: "pointer", gap: "0.5rem" }}>
              <input 
                type="checkbox" 
                checked={isAutoReadEnabled} 
                onChange={(e) => setIsAutoReadEnabled(e.target.checked)}
              />
              Auto-read words
            </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "stretch" }}>
            <div
              style={{
                border: "1px solid #ccc", borderRadius: 8, padding: "0.75rem",
                background: "#f9f9f9", display: "flex", alignItems: "center",
                justifyContent: "space-between", minHeight: 56, boxSizing: "border-box",
                fontFamily: "'OpenDyslexic', sans-serif",
              }}
              role="dialog"
            >
              <div style={{ width: 40 }} /> {/* Spacer */}
              <p style={{ margin: 0, fontSize: "2rem", fontWeight: 600, color: "darkgreen", }}>{current}</p>
              <button
                onClick={handleSpeak}
                style={{
                  background: "#fff", border: "1px solid #ccc", borderRadius: "50%",
                  width: 40, height: 40, cursor: "pointer", fontSize: "1.2rem",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
                title="Speak Word"
              >
                &#x25B6;
              </button>
            </div>

            <input
              ref={inputRef}
              value={input}
              onFocus={() => setShowKeyboard(true)}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Type the word here..."
              style={{
                width: "100%", padding: "0.75rem", fontSize: "1.125rem",
                height: 56, borderRadius: 8, border: "1px solid #ccc",
                boxSizing: "border-box", fontFamily: "'OpenDyslexic', sans-serif",
              }}
            />

            <div style={{ marginTop: "0.25rem", color: "#666", textAlign: "center" }}>
              Completed: {completed}
            </div>
          </div>
        </div>
      </main>

      {showKeyboard && (
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          inputName="default"
          buttonTheme={[
            { class: "finger-pinky", buttons: "` 1 q a z {shiftleft} {shiftright} {lock} {tab} .com @ " },
            { class: "finger-ring", buttons: "2 w s x" },
            { class: "finger-middle", buttons: "3 e d c" },
            { class: "finger-index", buttons: "4 5 r t f g v b" },
            { class: "finger-thumb", buttons: "{space}" },
            { class: "finger-index-right", buttons: "6 7 y u h j n m" },
            { class: "finger-middle-right", buttons: "8 i k ," },
            { class: "finger-ring-right", buttons: "9 o l ." },
            { class: "finger-pinky-right", buttons: "0 - = p ; ' [ ] \\ {bksp} {enter} {shift} /" },
            ...(pressedKey ? [{ class: "key-pressed", buttons: pressedKey }] : []),
          ]}
        />
      )}
    </>
  );
}