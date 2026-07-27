import { useEffect, useState } from "react";
import { getStudents } from "./firestore";

const useFirestore = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  return {
    students,
    loadStudents,
  };
};

export default useFirestore;
