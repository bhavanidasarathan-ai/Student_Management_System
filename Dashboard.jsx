const Dashboard = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Total Students</h3>
          <h1>500</h1>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Attendance</h3>
          <h1>95%</h1>
        </div>

        <div
          style={{
            background: "#ea580c",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Departments</h3>
          <h1>8</h1>
        </div>

        <div
          style={{
            background: "#7c3aed",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Top Rank</h3>
          <h1>Priya</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
