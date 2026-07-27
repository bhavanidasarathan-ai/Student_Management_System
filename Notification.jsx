function Notification() {

    const notifications = [

        "Semester Exam starts on 10th June",

        "Fee Payment Last Date : 25th June",

        "Project Review on Monday",

        "Internal Marks Published"

    ];

    return (

<div>

<h2>Latest Notifications</h2>

<ul>

{

notifications.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}

</ul>

</div>

    );

}

export default Notification;
