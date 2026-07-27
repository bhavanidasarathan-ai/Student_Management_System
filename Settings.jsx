const Settings = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Settings</h1>

      <br />

      <button>🌙 Dark Mode</button>

      <br />
      <br />

      <button>🔔 Notifications</button>

      <br />
      <br />

      <button>🌐 Language</button>

      <br />
      <br />

      <button
        style={{
          background: "red",
          color: "white",
          padding: "10px",
          border: "none",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
