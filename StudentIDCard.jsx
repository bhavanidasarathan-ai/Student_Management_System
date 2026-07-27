import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "./studentService";

function StudentIDCard() {

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const data = await getStudent(id);
    setStudent(data);
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "40px auto",
        border: "2px solid #0d6efd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >

      <h2>ABC College</h2>

      <hr />

      <img
        src="https://via.placeholder.com/120"
        alt="Student"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%"
        }}
      />

      <h3>{student.name}</h3>

      <p><b>Register No :</b> {student.registerNo}</p>

      <p><b>Department :</b> {student.department}</p>

      <p><b>Year :</b> {student.year}</p>

      <p><b>Email :</b> {student.email}</p>

      <p><b>Phone :</b> {student.phone}</p>

      <button onClick={() => window.print()}>
        Print ID Card
      </button>

    </div>
  );
}

export default StudentIDCard;
