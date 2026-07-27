export const filterByDepartment = (students, department) => {
  return students.filter(
    (student) => student.department === department
  );
};

export const filterByYear = (students, year) => {
  return students.filter(
    (student) => student.year === year
  );
};
