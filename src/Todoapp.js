import React, { useState } from "react";


function Todoapp(){

        const [job,setjob]=useState('')
        const [jobs,setjobs]=useState([])


        const hamdlesbumit= () =>{
            setjobs(prev =>  [...prev,job]
            )
            setjob('')
        }
        console.log(job);


    return (
        <div>
            <input value={job} onChange = {e => setjob(e.target.value)}/>
            <button onClick={hamdlesbumit}>Add</button>
            <ul>{jobs.map((job,index) => 
                <li key={index}>{job}</li>
            )}
            </ul>
        </div>
    )
}
export default Todoapp