import { useEffect, useState } from "react";
import { getStudents } from "./studentService";
import { addMarks } from "./marksService";
import { calculateGrade } from "./gradeCalculator";

function AddMarks() {

    const [students, setStudents] = useState([]);

    const [formData, setFormData] = useState({
        studentId: "",
        studentName: "",
        subject: "",
        marks: ""
    });

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const data = await getStudents();
        setStudents(data);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleStudent = (e) => {

        const student = students.find(
            (s) => s.id === e.target.value
        );

        setFormData({
            ...formData,
            studentId: student.id,
            studentName: student.name
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await addMarks({

            ...formData,

            grade: calculateGrade(Number(formData.marks)),

            result:
                Number(formData.marks) >= 50
                    ? "Pass"
                    : "Fail"

        });

        alert("Marks Added Successfully");

    };

    return (

        <div>

            <h2>Add Marks</h2>

            <form onSubmit={handleSubmit}>

                <select
                    onChange={handleStudent}
                    required
                >

                    <option>Select Student</option>

                    {

                        students.map((student)=>(

                            <option
                                key={student.id}
                                value={student.id}
                            >
                                {student.name}
                            </option>

                        ))

                    }

                </select>

                <br /><br />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="marks"
                    placeholder="Marks"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">

                    Save Marks

                </button>

            </form>

        </div>

    );

}

export default AddMarks;
