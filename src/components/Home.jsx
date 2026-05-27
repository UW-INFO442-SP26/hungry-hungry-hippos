import React from "react";

const FINGER_COLORS = {
  pinky: "#c084fc",
  ring: "#60a5fa",
  middle: "#34d399",
  indexLeft: "#facc15",
  thumb: "#f87171",
  indexRight: "#fb923c",
  middleRight: "#2dd4bf",
  ringRight: "#818cf8",
  pinkyRight: "#c084fc",
};

const fingers = [
  { label: "Pinky", color: FINGER_COLORS.pinky },
  { label: "Ring", color: FINGER_COLORS.ring },
  { label: "Middle", color: FINGER_COLORS.middle },
  { label: "Index", color: FINGER_COLORS.indexLeft },
  { label: "Thumb", color: FINGER_COLORS.thumb },
];

const fingersRight = [
  { label: "Thumb", color: FINGER_COLORS.thumb },
  { label: "Index", color: FINGER_COLORS.indexRight },
  { label: "Middle", color: FINGER_COLORS.middleRight },
  { label: "Ring", color: FINGER_COLORS.ringRight },
  { label: "Pinky", color: FINGER_COLORS.pinkyRight },
];

function Hand({ fingers, flip = false }) {
  const order = flip ? [...fingers].reverse() : fingers;
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transform: flip ? "scaleX(-1)" : "none",
    }}>
      {/* Fingers */}
      <div style={{ display: "flex", gap: 6, alignItems: "flex-end", marginBottom: 4 }}>
        {order.map((f, i) => (
          <div key={i} style={{
            width: i === 0 || i === 4 ? 28 : 34,
            height: i === 2 ? 80 : i === 0 || i === 4 ? 55 : 70,
            borderRadius: "40px 40px 8px 8px",
            background: f.color,
            boxShadow: `0 2px 8px ${f.color}88`,
          }} />
        ))}
      </div>
      {/* Palm */}
      <div style={{
        width: 160,
        height: 90,
        borderRadius: "12px 12px 40px 40px",
        background: "#e5e7eb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }} />
    </div>
  );
}

const keyRows = [
  [
    { key: "`", finger: "pinky" }, { key: "1", finger: "pinky" },
    { key: "2", finger: "ring" }, { key: "3", finger: "middle" },
    { key: "4", finger: "indexLeft" }, { key: "5", finger: "indexLeft" },
    { key: "6", finger: "indexRight" }, { key: "7", finger: "indexRight" },
    { key: "8", finger: "middleRight" }, { key: "9", finger: "ringRight" },
    { key: "0", finger: "pinkyRight" }, { key: "-", finger: "pinkyRight" },
    { key: "=", finger: "pinkyRight" },
  ],
  [
    { key: "tab", finger: "pinky" },
    { key: "q", finger: "pinky" }, { key: "w", finger: "ring" },
    { key: "e", finger: "middle" }, { key: "r", finger: "indexLeft" },
    { key: "t", finger: "indexLeft" }, { key: "y", finger: "indexRight" },
    { key: "u", finger: "indexRight" }, { key: "i", finger: "middleRight" },
    { key: "o", finger: "ringRight" }, { key: "p", finger: "pinkyRight" },
    { key: "[", finger: "pinkyRight" }, { key: "]", finger: "pinkyRight" },
    { key: "\\", finger: "pinkyRight" },
  ],
  [
    { key: "caps", finger: "pinky" },
    { key: "a", finger: "pinky" }, { key: "s", finger: "ring" },
    { key: "d", finger: "middle" }, { key: "f", finger: "indexLeft" },
    { key: "g", finger: "indexLeft" }, { key: "h", finger: "indexRight" },
    { key: "j", finger: "indexRight" }, { key: "k", finger: "middleRight" },
    { key: "l", finger: "ringRight" },

  ],
  [
    { key: "shift", finger: "pinky" },
    { key: "z", finger: "pinky" }, { key: "x", finger: "ring" },
    { key: "c", finger: "middle" }, { key: "v", finger: "indexLeft" },
    { key: "b", finger: "indexLeft" }, { key: "n", finger: "indexRight" },
    { key: "m", finger: "indexRight" },
    { key: ".", finger: "ringRight" }, { key: "/", finger: "pinkyRight" },
    { key: "shift", finger: "pinkyRight" },
  ],
];

export default function Home() {
  return (
    <main style={{
      fontFamily: "'OpenDyslexic', sans-serif",
      padding: "3rem 2rem 4rem",
      maxWidth: 860,
      margin: "0 auto",
    }}>

      {/* Hero */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          lineHeight: 1.2,
        }}>
          Welcome to <span style={{ color: "#f472b6" }}>HippoTypes</span> 🦛
        </h1>

        {/* Hippo placeholder */}
        <div style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e0e7ff, #fce7f3)",
          margin: "0 auto 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          boxShadow: "0 8px 32px rgba(244,114,182,0.2)",
          border: "3px dashed #f472b6",
        }}>
          🦛
        </div>

        <p style={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          maxWidth: 600,
          margin: "0 auto 1.5rem",
          color: "var(--text, #555)",
        }}>
          HippoTypes is a typing practice tool designed for dyslexic learners.
          Through color-coded finger guides and dyslexia-friendly fonts, we make
          learning to type on a QWERTY keyboard approachable and fun.
        </p>

     
      </section>

      {/* Finger guide */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Let's teach you where to put your fingers!
        </h2>
        <p style={{ color: "var(--text, #666)", marginBottom: "2rem", fontSize: "0.95rem" }}>
          Each color matches a finger — follow the diagram when typing.
        </p>

        {/* Hands */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ marginBottom: 8, fontWeight: 600, fontSize: "0.9rem" }}>Left Hand</p>
            <Hand fingers={fingers} />
          </div>
          <div>
            <p style={{ marginBottom: 8, fontWeight: 600, fontSize: "0.9rem" }}>Right Hand</p>
            <Hand fingers={fingersRight} flip={true} />
          </div>
        </div>

        {/* Color legend */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}>
          {[
            { label: "Pinky (both)", color: FINGER_COLORS.pinky },
            { label: "Ring (left)", color: FINGER_COLORS.ring },
            { label: "Middle (left)", color: FINGER_COLORS.middle },
            { label: "Index (left)", color: FINGER_COLORS.indexLeft },
            { label: "Thumbs", color: FINGER_COLORS.thumb },
            { label: "Index (right)", color: FINGER_COLORS.indexRight },
            { label: "Middle (right)", color: FINGER_COLORS.middleRight },
            { label: "Ring (right)", color: FINGER_COLORS.ringRight },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#f9fafb",
              borderRadius: 20,
              padding: "4px 12px",
              fontSize: "0.8rem",
              border: "1px solid #e5e7eb",
            }}>
              <div style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
              }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Mini keyboard */}
        <div style={{
          background: "#1f2028",
          borderRadius: 16,
          padding: "1.25rem",
          display: "inline-block",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}>
          {keyRows.map((row, ri) => (
            <div key={ri} style={{
              display: "flex",
              gap: 5,
              marginBottom: ri < keyRows.length - 1 ? 5 : 0,
              justifyContent: "center",
            }}>
              {row.map((k, ki) => (
                <div key={ki} style={{
                  width: 38,
                  height: 38,
                  borderRadius: 6,
                  background: FINGER_COLORS[k.finger],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#000",
                  fontFamily: "'OpenDyslexic', sans-serif",
                  boxShadow: `0 2px 0 rgba(0,0,0,0.3)`,
                  textTransform: "uppercase",
                }}>
                  {k.key}
                </div>
              ))}
            </div>
          ))}
          {/* Space bar */}
          <div style={{
            marginTop: 5,
            height: 38,
            borderRadius: 6,
            background: FINGER_COLORS.thumb,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#000",
            width: "60%",
            margin: "5px auto 0",
          }}>
            space
          </div>
        </div>
      </section>
    </main>
  );
}