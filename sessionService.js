export const saveUser = (user) => {
  localStorage.setItem("studentUser", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("studentUser"));
};

export const removeUser = () => {
  localStorage.removeItem("studentUser");
};
