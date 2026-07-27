import { useEffect, useState } from "react";
import { getTimetable } from "./TimetableService";

function Timetable() {

    const [table, setTable] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const data = await getTimetable();

        setTable(data);

    };

    return (

<div>

<h2>College Timetable</h2>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>Day</th>

<th>Subject</th>

<th>Faculty</th>

<th>Time</th>

</tr>

</thead>

<tbody>

{

table.map((row)=>(

<tr key={row.id}>

<td>{row.day}</td>

<td>{row.subject}</td>

<td>{row.faculty}</td>

<td>{row.time}</td>

</tr>

))

}

</tbody>

</table>

</div>

    );

}

export default Timetable;
