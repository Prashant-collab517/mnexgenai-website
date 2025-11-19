export default function Home() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      padding: "60px",
      textAlign: "center"
    }}>
      
      <img 
        src="/logo.png" 
        alt="MnexGenAI Logo"
        style={{ width: "160px", marginBottom: "20px" }}
      />

      <h1 style={{ 
        fontSize: "42px", 
        fontWeight: "700",
        color: "#6B4DE6" 
      }}>
        MnexGenAI Lead Engine
      </h1>

      <p style={{
        marginTop: "16px",
        fontSize: "20px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        Automating lead generation, outreach, CRM workflows, and follow-ups
        — enabling predictable revenue for founders, agencies, and businesses.
      </p>

      <p style={{
        marginTop: "40px",
        fontSize: "18px",
        color: "#333"
      }}>
        🚀 Your Next.js website is successfully deployed.<br/>
        Replace this homepage with the full UI and hero sections anytime.
      </p>

    </div>
  );
}
