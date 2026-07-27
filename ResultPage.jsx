import { useEffect, useState } from "react";
import { getMarks } from "./marksService";

function ResultPage() {

    const [marks, setMarks] = useState([]);

    useEffect(() => {

        loadMarks();

    }, []);

    const loadMarks = async () => {

        const data = await getMarks();

        setMarks(data);

    };

    return (

        <div>

            <h2>Student Results</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Grade</th>
                        <th>Result</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        marks.map((mark)=>(

                            <tr key={mark.id}>

                                <td>{mark.studentName}</td>

                                <td>{mark.subject}</td>

                                <td>{mark.marks}</td>

                                <td>{mark.grade}</td>

                                <td>{mark.result}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ResultPage;
