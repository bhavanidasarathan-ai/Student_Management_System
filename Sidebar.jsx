import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "230px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        position: "fixed",
        left: 0,
        top: 70,
        paddingTop: "30px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: "0",
        }}
      >
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/marks">Marks</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <style>{`
        li{
            padding:18px;
            font-size:18px;
        }

        a{
            color:white;
            text-decoration:none;
        }

        li:hover{
            background:#334155;
            cursor:pointer;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
