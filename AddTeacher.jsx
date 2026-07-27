import { useState } from "react";
import { addTeacher } from "./TeacherService";
import { useNavigate } from "react-router-dom";

function AddTeacher() {

    const navigate = useNavigate();

    const [teacher, setTeacher] = useState({

        name: "",
        email: "",
        phone: "",
        department: "",
        subject: ""

    });

    const handleChange = (e) => {

        setTeacher({

            ...teacher,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await addTeacher(teacher);

        alert("Teacher Added Successfully");

        navigate("/teachers");

    };

    return (

<div>

<h2>Add Teacher</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Teacher Name"
onChange={handleChange}
required
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<br/><br/>

<input
type="text"
name="phone"
placeholder="Phone Number"
onChange={handleChange}
required
/>

<br/><br/>

<input
type="text"
name="department"
placeholder="Department"
onChange={handleChange}
required
/>

<br/><br/>

<input
type="text"
name="subject"
placeholder="Subject"
onChange={handleChange}
required
/>

<br/><br/>

<button>

Save Teacher

</button>

</form>

</div>

    );

}

export default AddTeacher;
