import { useEffect, useState } from "react";
import { getStudents } from "./studentService";

function StudentDashboard() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    loadCount();

  }, []);

  const loadCount = async () => {

    const students = await getStudents();

    setCount(students.length);

  };

  return (

    <div
      style={{
        background: "#0d6efd",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center"
      }}
    >

      <h3>Total Students</h3>

      <h1>{count}</h1>

    </div>

  );

}

export default StudentDashboard;
