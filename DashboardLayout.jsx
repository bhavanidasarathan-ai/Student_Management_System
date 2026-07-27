import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />

    <div className="main-content">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
