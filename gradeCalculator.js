export const calculateGrade = (marks) => {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
};

export const calculatePercentage = (obtained, total) => {
  return ((obtained / total) * 100).toFixed(2);
};
