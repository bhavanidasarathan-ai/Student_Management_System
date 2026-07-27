import DashboardLayout from "../layouts/DashboardLayout";

const students = [
  {
    id: 1,
    name: "Priya",
    department: "Software Systems",
    year: "IV",
    attendance: "95%",
  },
  {
    id: 2,
    name: "Dhanya",
    department: "Computer Science",
    year: "III",
    attendance: "90%",
  },
  {
    id: 3,
    name: "Bhavani",
    department: "AI & DS",
    year: "II",
    attendance: "98%",
  },
];

const Students = () => {
  return (
    <DashboardLayout>
      <div style={{ padding: "30px" }}>
        <h1>Student Management</h1>

        <button
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            margin: "20px 0",
            cursor: "pointer",
          }}
        >
          + Add Student
        </button>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead style={{ background: "#2563eb", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.attendance}</td>
                <td>
                  <button>Edit</button>{" "}
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Students;
