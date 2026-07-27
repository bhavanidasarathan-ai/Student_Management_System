function NoticeBoard() {

const notices = [

"Semester Examination starts on July 15",

"Project Review on Monday",

"Library will remain closed on Sunday",

"Fee Payment Last Date : July 30"

];

return(

<div>

<h2>Notice Board</h2>

<ul>

{

notices.map((notice,index)=>(

<li key={index}>

{notice}

</li>

))

}

</ul>

</div>

)

}

export default NoticeBoard;
