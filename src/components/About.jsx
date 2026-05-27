export default function About() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>About</h1>
         <div style={{
          background: "linear-gradient(135deg, #fce7f3, #e0e7ff)",
          borderRadius: 16,
          padding: "1.25rem 1.5rem",
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "left",
          borderLeft: "4px solid #f472b6",
        }}>
          <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7, color: "#374151" }}>
            <strong>Our Mission:</strong> Aligned with UN SDG Goal 4: Quality Education,
            HippoTypes addresses the question: <em>"How might we help elementary-age learners
            manage the impact of dyslexia on their ability to use a traditional QWERTY-based keyboard?"</em>
            {" "}We aim to support SDG 4.6 by helping all youth achieve literacy and digital fluency.
          </p>
        </div>
    </main>
  );
}


