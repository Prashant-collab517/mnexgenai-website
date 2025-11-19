export default function Home() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      padding: "60px 20px",
      textAlign: "center"
    }}>
      <img 
        src="/logo.png"
        alt="MnexGenAI Logo"
        style={{ width: 140, marginBottom: 20 }}
      />

      <h1 style={{
        fontSize: 42,
        fontWeight: 700,
        color: "#6B4DE6",
        marginBottom: 20
      }}>
        MnexGenAI Lead Engine
      </h1>

      <p style={{
        fontSize: 18,
        maxWidth: 650,
        margin: "0 auto",
        lineHeight: 1.6
      }}>
        AI-powered automation for lead generation, outreach, CRM workflows,
        follow-ups, and predictable revenue — built for founders, agencies,
        and global businesses.
      </p>
    </div>
  );
}
