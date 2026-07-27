import { useEffect,useState } from "react";
import { getStudents } from "./studentService";

function RecentStudents(){

const [students,setStudents]=useState([]);

useEffect(()=>{

loadStudents();

},[]);

const loadStudents=async()=>{

const data=await getStudents();

setStudents(data.slice(0,5));

}

return(

<div>

<h2>Recent Students</h2>

<table border="1">

<thead>

<tr>

<th>Name</th>

<th>Department</th>

</tr>

</thead>

<tbody>

{

students.map((student)=>(

<tr key={student.id}>

<td>{student.name}</td>

<td>{student.department}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}

export default RecentStudents;
