const DashboardCard = ({ title, value, color }) => {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 8px rgba(0,0,0,.1)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
};

export default DashboardCard;
