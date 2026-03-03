export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0f172a", color: "white", fontFamily: "sans-serif" }}>
      
      {/* SIDEBAR */}
      <div style={{ width: "240px", background: "#0b1220", padding: "20px" }}>
        <h2 style={{ marginBottom: "30px" }}>BotHost</h2>
        <p style={{ opacity: 0.6 }}>Dashboard</p>
        <p style={{ opacity: 0.6 }}>New Bot</p>
        <p style={{ opacity: 0.6 }}>Admin Panel</p>
        <p style={{ opacity: 0.6 }}>Logout</p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "30px" }}>
        <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

        {/* STAT CARDS */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          <div style={cardStyle}>
            <p>Total Bots</p>
            <h2>1</h2>
          </div>
          <div style={cardStyle}>
            <p>Running</p>
            <h2 style={{ color: "lime" }}>1</h2>
          </div>
          <div style={cardStyle}>
            <p>Ram / Bot</p>
            <h2>2048MB</h2>
          </div>
        </div>

        {/* BOT PANEL */}
        <div style={{ ...cardStyle, padding: "20px" }}>
          <h3>pdz</h3>
          <p style={{ color: "lime" }}>RUNNING</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button style={greenBtn}>Start</button>
            <button style={redBtn}>Stop</button>
            <button style={yellowBtn}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "12px",
  minWidth: "150px"
};

const greenBtn = {
  background: "green",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px"
};

const redBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px"
};

const yellowBtn = {
  background: "orange",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px"
};
