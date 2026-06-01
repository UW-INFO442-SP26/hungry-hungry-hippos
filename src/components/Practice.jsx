import React, { useEffect, useRef, useState, useCallback } from "react";
import { KeyboardReact as Keyboard } from "react-simple-keyboard";
import "simple-keyboard/build/css/index.css";
import wordData from "../data/words.json";

/* used AI to help create shuffle of words */
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

export default function Practice() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [isAutoReadEnabled, setIsAutoReadEnabled] = useState(false); 
  const [pressedKey, setPressedKey] = useState(null);

  const inputRef = useRef(null);
  const keyboardRef = useRef(null);
  const [level, setLevel] = useState("level1");

  const WORDS = React.useMemo(() => shuffle(wordData[level]), [level]);
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


            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "0.5rem" }}>
              {["level1", "level2", "level3"].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLevel(l); setIndex(0); setInput(""); keyboardRef.current?.clearInput(); }}
                  style={{
                    padding: "0.4rem 1rem",
                    borderRadius: 20,
                    border: "2px solid",
                    borderColor: level === l ? "#c084fc" : "#ccc",
                    background: level === l ? "#c084fc" : "transparent",
                    color: level === l ? "#000" : "var(--text)",
                    cursor: "pointer",
                    fontFamily: "'OpenDyslexic', sans-serif",
                    fontWeight: level === l ? 700 : 400,
                  }}
                >
                  {l === "level1" ? "Level 1" : l === "level2" ? "Level 2" : "Level 3"}
                </button>
              ))}
            </div>

            
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
              <p style={{ margin: 0, fontSize: "2rem", fontWeight: 600, color: "#666", }}>{current}</p>
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