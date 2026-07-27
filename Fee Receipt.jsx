function Receipt({fee}){

return(

<div>

<h2>Fee Receipt</h2>

<hr/>

<p>

Student :

{fee.studentName}

</p>

<p>

Amount :

${fee.amount}

</p>

<p>

Status :

{fee.status}

</p>

<p>

Thank You

</p>

</div>

)

}

export default Receipt;
