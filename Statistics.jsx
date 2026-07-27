import { useEffect, useState } from "react";
import { getStudents } from "./studentService";
import { getMarks } from "./marksService";

function Statistics() {

const [students,setStudents]=useState(0);

const [results,setResults]=useState(0);

useEffect(()=>{

loadData();

},[]);

const loadData=async()=>{

const studentData=await getStudents();

const marksData=await getMarks();

setStudents(studentData.length);

setResults(marksData.length);

}

return(

<div className="row">

<div className="col-md-6">

<div className="card">

<div className="card-body">

<h3>Total Students</h3>

<h1>{students}</h1>

</div>

</div>

</div>

<div className="col-md-6">

<div className="card">

<div className="card-body">

<h3>Total Results</h3>

<h1>{results}</h1>

</div>

</div>

</div>

</div>

);

}

export default Statistics;
