import { deleteStudent } from "./studentService";

const DeleteStudent = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return false;

    try {

        await deleteStudent(id);

        alert("Student Deleted Successfully");

        window.location.reload();

    } catch (error) {

        alert(error.message);

    }

};

export default DeleteStudent;
