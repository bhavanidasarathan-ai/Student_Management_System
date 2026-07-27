import { useEffect, useState } from "react";
import { getStudents } from "./studentService";
import { addFee } from "./FeeService";

function AddFee() {

    const [students,setStudents]=useState([]);

    const [fee,setFee]=useState({

        studentId:"",
        studentName:"",
        amount:"",
        status:"Pending"

    });

    useEffect(()=>{

        loadStudents();

    },[]);

    const loadStudents=async()=>{

        const data=await getStudents();

        setStudents(data);

    }

    const handleStudent=(e)=>{

        const student=students.find(
            s=>s.id===e.target.value
        );

        setFee({

            ...fee,

            studentId:student.id,

            studentName:student.name

        });

    }

    const handleChange=(e)=>{

        setFee({

            ...fee,

            [e.target.name]:e.target.value

        });

    }

    const handleSubmit=async(e)=>{

        e.preventDefault();

        await addFee(fee);

        alert("Fee Added Successfully");

    }

    return(

<div>

<h2>Add Fee</h2>

<form onSubmit={handleSubmit}>

<select onChange={handleStudent}>

<option>Select Student</option>

{

students.map(student=>(

<option
key={student.id}
value={student.id}
>

{student.name}

</option>

))

}

</select>

<br/><br/>

<input
type="number"
name="amount"
placeholder="Fee Amount"
onChange={handleChange}
/>

<br/><br/>

<select
name="status"
onChange={handleChange}
>

<option>Pending</option>

<option>Paid</option>

</select>

<br/><br/>

<button>

Save Fee

</button>

</form>

</div>

)

}

export default AddFee;
