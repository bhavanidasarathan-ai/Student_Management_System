import { useEffect, useState } from "react";
import { getMarks } from "./marksService";

function Result() {

    const [marks, setMarks] = useState([]);

    useEffect(() => {
        loadMarks();
    }, []);

    const loadMarks = async () => {
        const data = await getMarks();
        setMarks(data);
    };

    return (

<div className="container mt-4">

<h2>Student Results</h2>

<table className="table table-bordered">

<thead>

<tr>

<th>Student</th>

<th>Subject</th>

<th>Marks</th>

</tr>

</thead>

<tbody>

{

marks.map((mark)=>(

<tr key={mark.id}>

<td>{mark.studentName}</td>

<td>{mark.subject}</td>

<td>{mark.marks}</td>

</tr>

))

}

</tbody>

</table>

</div>

    );

}

export default Result;
