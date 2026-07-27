import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "./studentService";

function StudentProfile() {

  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const data = await getStudent(id);
    setStudent(data);
  };

  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-5">

      <h2>Student Profile</h2>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          width: "500px"
        }}
      >

        <h3>{student.name}</h3>

        <hr />

        <p><strong>Email :</strong> {student.email}</p>

        <p><strong>Phone :</strong> {student.phone}</p>

        <p><strong>Department :</strong> {student.department}</p>

        <p><strong>Year :</strong> {student.year}</p>

      </div>

    </div>
  );
}

export default StudentProfile;
