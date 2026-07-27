import { useEffect, useState } from "react";
import { getTeachers } from "./TeacherService";
import { Link } from "react-router-dom";

function Teachers() {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {

        loadTeachers();

    }, []);

    const loadTeachers = async () => {

        const data = await getTeachers();

        setTeachers(data);

    };

    return (

<div>

<h2>Teachers</h2>

<Link to="/add-teacher">

<button>Add Teacher</button>

</Link>

<br/><br/>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Department</th>

<th>Subject</th>

</tr>

</thead>

<tbody>

{

teachers.map((teacher)=>(

<tr key={teacher.id}>

<td>{teacher.name}</td>

<td>{teacher.email}</td>

<td>{teacher.department}</td>

<td>{teacher.subject}</td>

</tr>

))

}

</tbody>

</table>

</div>

    );

}

export default Teachers;
