import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h1>Dashboard</h1>

      <div
        className="dashboard-grid"className="dashboard-grid"
      >

        <div className="card">
          <h3>Total Students</h3>
          <h1>500</h1>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <h1>95%</h1>
        </div>

        <div className="card">
          <h3>Faculty</h3>
          <h1>42</h1>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <h1>8</h1>
        </div>

      </div>

      <style>{`
      .card{
          background:white;
          padding:25px;
          border-radius:10px;
          box-shadow:0 0 8px rgba(0,0,0,.1);
      }

      .card h3{
          color:#64748b;
      }

      .card h1{
          margin-top:10px;
          color:#2563eb;
      }
      `}</style>

    </DashboardLayout>
  );
};

export default Dashboard;
