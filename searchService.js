export const searchStudents = (students, keyword) => {
  return students.filter((student) =>
    student.name.toLowerCase().includes(keyword.toLowerCase())
  );
};
