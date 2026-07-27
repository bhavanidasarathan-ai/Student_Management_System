const marks = [
  {
    id: 1,
    name: "Priya",
    subject: "React",
    mark: 95,
    grade: "A+",
  },
  {
    id: 2,
    name: "Rahul",
    subject: "Java",
    mark: 88,
    grade: "A",
  },
  {
    id: 3,
    name: "Anjali",
    subject: "Python",
    mark: 92,
    grade: "A+",
  },
];

const Marks = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Marks</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ background: "#ea580c", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Mark</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {marks.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.mark}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
