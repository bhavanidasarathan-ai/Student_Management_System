import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudent, updateStudent } from "./studentService";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: ""
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const data = await getStudent(id);

    setStudent(data);
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    await updateStudent(id, student);

    alert("Student Updated Successfully");

    navigate("/students");

  };

  return (

    <div className="container mt-5">

      <h2>Edit Student</h2>

      <form onSubmit={handleUpdate}>

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
        >

          <option value="I Year">I Year</option>
          <option value="II Year">II Year</option>
          <option value="III Year">III Year</option>

        </select>

        <br /><br />

        <button type="submit">

          Update Student

        </button>

      </form>

    </div>

  );

}

export default EditStudent;
