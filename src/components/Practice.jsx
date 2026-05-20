import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  "apple",
  "banana",
  "orange",
  "hippo",
  "react",
  "javascript",
  "keyboard",
  "speed",
  "practice",
];

export default function Practice() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [index]);

  const current = WORDS[index % WORDS.length];

  function handleChange(e) {
    const v = e.target.value;
    setInput(v);

    if (v === current) {
      setCompleted((c) => c + 1);
      setInput("");
      setIndex((i) => i + 1);
    }
  }

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 560 }}>
        <h1 style={{ textAlign: "center", marginTop: 0 }}>Practice</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "stretch",
            marginTop: "1rem",
          }}
        >

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: "0.75rem",
              background: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 56,
              boxSizing: "border-box",
              fontFamily: "'OpenDyslexic', sans-serif",
            }}
            role="dialog"
            aria-label="typing-practice"
          >
            <p style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600, textAlign: "center" }}>{current}</p>
          </div>

          <input
            ref={inputRef}
            value={input}
            onChange={handleChange}
            placeholder="Type the word here..."
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1.125rem",
              height: 56,
              borderRadius: 8,
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontFamily: "'OpenDyslexic', sans-serif",
            }}
          />

          <div style={{ marginTop: "0.25rem", color: "#666", textAlign: "center" }}>
            Completed: {completed}
          </div>
        </div>
      </div>
    </main>
  );
}
