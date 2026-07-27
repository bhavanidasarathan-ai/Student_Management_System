export const calculateAverageMarks = (marks) => {
  if (!marks.length) return 0;

  const total = marks.reduce(
    (sum, student) => sum + Number(student.mark),
    0
  );

  return (total / marks.length).toFixed(2);
};

export const calculatePassPercentage = (marks) => {
  if (!marks.length) return 0;

  const passed = marks.filter(
    (student) => Number(student.mark) >= 50
  ).length;

  return ((passed / marks.length) * 100).toFixed(2);
};
