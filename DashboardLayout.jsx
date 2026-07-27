import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          marginTop: "80px",
          padding: "25px",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
