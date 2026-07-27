import { useEffect,useState } from "react";
import { getFees } from "./FeeService";

function FeeList(){

const [fees,setFees]=useState([]);

useEffect(()=>{

loadFees();

},[]);

const loadFees=async()=>{

const data=await getFees();

setFees(data);

}

return(

<div>

<h2>Fee Details</h2>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>Name</th>

<th>Amount</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

fees.map((fee)=>(

<tr key={fee.id}>

<td>{fee.studentName}</td>

<td>${fee.amount}</td>

<td>{fee.status}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}

export default FeeList;
