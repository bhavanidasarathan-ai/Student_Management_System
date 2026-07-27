const attendance = [
  { id: 1, name: "Priya", status: "Present" },
  { id: 2, name: "Rahul", status: "Absent" },
  { id: 3, name: "Anjali", status: "Present" },
];

const Attendance = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Attendance</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ background: "#16a34a", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
