import { getStudents } from "./studentService";
import { getAttendance } from "./attendanceService";
import { getMarks } from "./marksService";

// Dashboard Report
export const getDashboardReport = async () => {
  const students = await getStudents();
  const attendance = await getAttendance();
  const marks = await getMarks();

  return {
    totalStudents: students.length,
    totalAttendance: attendance.length,
    totalMarks: marks.length,
  };
};
