import { useEffect, useState } from "react";
import { getStudents } from "./studentService";
import { markAttendance } from "./attendanceService";

function AttendancePage() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        loadStudents();

    }, []);

    const loadStudents = async () => {

        const data = await getStudents();

        setStudents(data);

    };

    const handleAttendance = async (student) => {

        await markAttendance({

            studentId: student.id,

            name: student.name,

            date: new Date().toLocaleDateString(),

            status: "Present"

        });

        alert("Attendance Marked");

    };

    return (

        <div>

            <h2>Attendance</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Department</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        students.map((student)=>(

                            <tr key={student.id}>

                                <td>{student.name}</td>

                                <td>{student.department}</td>

                                <td>

                                    <button
                                        onClick={()=>handleAttendance(student)}
                                    >
                                        Present
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AttendancePage;
