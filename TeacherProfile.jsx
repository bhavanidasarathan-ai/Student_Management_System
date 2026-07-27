import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeacher } from "./TeacherService";

function TeacherProfile() {

    const { id } = useParams();

    const [teacher, setTeacher] = useState({});

    useEffect(() => {

        loadTeacher();

    }, []);

    const loadTeacher = async () => {

        const data = await getTeacher(id);

        setTeacher(data);

    };

    return (

<div>

<h2>Teacher Profile</h2>

<hr/>

<p><strong>Name :</strong> {teacher.name}</p>

<p><strong>Email :</strong> {teacher.email}</p>

<p><strong>Phone :</strong> {teacher.phone}</p>

<p><strong>Department :</strong> {teacher.department}</p>

<p><strong>Subject :</strong> {teacher.subject}</p>

</div>

    );

}

export default TeacherProfile;
