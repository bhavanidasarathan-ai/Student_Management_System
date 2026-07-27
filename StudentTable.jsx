const StudentTable = ({ students }) => {
  return (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
