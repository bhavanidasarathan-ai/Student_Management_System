import { useState } from "react";
import { addStudent } from "./studentService";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addStudent(student);

    alert("Student Added Successfully");

    navigate("/students");
  };

  return (
    <div className="container mt-5">

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="year"
          value={student.year}
          onChange={handleChange}
          required
        >
          <option value="">Select Year</option>
          <option value="I Year">I Year</option>
          <option value="II Year">II Year</option>
          <option value="III Year">III Year</option>
        </select>

        <br /><br />

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;
