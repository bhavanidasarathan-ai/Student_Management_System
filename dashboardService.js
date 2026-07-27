import { getStudents } from "./studentService";
import { getAttendance } from "./attendanceService";
import { getMarks } from "./marksService";

export const getDashboardData = async () => {
  const students = await getStudents();
  const attendance = await getAttendance();
  const marks = await getMarks();

  return {
    studentsCount: students.length,
    attendanceCount: attendance.length,
    marksCount: marks.length,
  };
};
