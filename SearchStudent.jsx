import { useState } from "react";

function SearchStudent({ students, setFilteredStudents }) {

    const [keyword, setKeyword] = useState("");

    const handleSearch = (e) => {

        const value = e.target.value;

        setKeyword(value);

        const filtered = students.filter((student) =>
            student.name.toLowerCase().includes(value.toLowerCase()) ||
            student.email.toLowerCase().includes(value.toLowerCase()) ||
            student.department.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredStudents(filtered);

    };

    return (

        <input
            type="text"
            placeholder="Search Student..."
            value={keyword}
            onChange={handleSearch}
        />

    );

}

export default SearchStudent;
