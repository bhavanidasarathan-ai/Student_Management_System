import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      style={{
        height: "70px",
        background: "#2563eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        color: "white",
      }}
    >
      <h2>🎓 Smart Student System</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <FaBell size={22} />
        <FaUserCircle size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
