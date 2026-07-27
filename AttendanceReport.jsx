import { useEffect, useState } from "react";
import { getAttendance } from "./attendanceService";

function AttendanceReport() {

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {

    loadReport();

  }, []);

  const loadReport = async () => {

    const data = await getAttendance();

    setAttendance(data);

  };

  const total = attendance.length;

  const present = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = total - present;

  const percentage =
    total === 0
      ? 0
      : ((present / total) * 100).toFixed(2);

  return (

    <div className="container">

      <h2>Attendance Report</h2>

      <hr />

      <p>

        <strong>Total Records :</strong> {total}

      </p>

      <p>

        <strong>Present :</strong> {present}

      </p>

      <p>

        <strong>Absent :</strong> {absent}

      </p>

      <p>

        <strong>Attendance Percentage :</strong>

        {" "}

        {percentage}%

      </p>

    </div>

  );

}

export default AttendanceReport;
