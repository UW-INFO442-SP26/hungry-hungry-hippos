export default function About() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Our Mission</h1>

      <div
        style={{
          background: "linear-gradient(135deg, #fce7f3, #e0e7ff)",
          borderRadius: 16,
          padding: "1.25rem 1.5rem",
          maxWidth: 640,
          margin: "0 auto",
          marginBottom: "1.5rem",
          textAlign: "left",
          borderLeft: "4px solid #f472b6",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#374151",
          }}
        >
          Students with dyslexia often face additional challenges when
          learning touch typing compared to their peers. These
          difficulties may stem from:
        </p>

        <ul
          style={{
            marginTop: "1rem",
            color: "#374151",
            lineHeight: 1.8,
          }}
        >
          <li>Limited access to accessible learning resources</li>
          <li>Insufficient opportunities for guided practice</li>
          <li>Challenges with traditional typing techniques</li>
        </ul>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #fce7f3, #e0e7ff)",
          borderRadius: 16,
          padding: "1.25rem 1.5rem",
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "left",
          borderLeft: "4px solid #f472b6",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#374151",
          }}
        >
          HippoTypes is a typing practice platform designed to support
          students with dyslexia in developing stronger keyboarding and
          digital literacy skills. Our mission is to create an
          accessible and supportive learning environment that helps
          elementary-age learners build confidence and improve their
          typing abilities through guided practice.
        </p>
      </div>
    </main>
  );
}
