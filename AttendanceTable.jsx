import { useEffect, useState } from "react";
import { getAttendance } from "./attendanceService";

function AttendanceTable() {

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    const data = await getAttendance();
    setAttendance(data);
  };

  return (
    <div className="container">

      <h2>Attendance Records</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {attendance.map((item) => (

            <tr key={item.id}>

              <td>{item.studentName}</td>

              <td>{item.date}</td>

              <td>
                {item.status === "Present"
                  ? "✅ Present"
                  : "❌ Absent"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AttendanceTable;
