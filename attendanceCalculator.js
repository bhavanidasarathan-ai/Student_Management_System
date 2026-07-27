export const calculateAttendance = (present, total) => {
  if (total === 0) return 0;

  return ((present / total) * 100).toFixed(2);
};

export const attendanceStatus = (percentage) => {
  return percentage >= 75 ? "Eligible" : "Shortage";
};
