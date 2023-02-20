import React from "react";
import {useState} from "react";

function Todoapplocal() {

    const [job,setjob] = useState('')
    const [jobs,setjobs] = useState(() => {
        const storge = JSON.parse(localStorage.getItem('jobs'))
        return storge
    })

    const hamdlesbumit = () =>{
        setjobs(prev =>{
            const newjobs = [...prev,job]
            const jsonjobs = JSON.stringify(newjobs)
            localStorage.setItem('jobs', jsonjobs)
            return newjobs
        })
        setjob('')
    }
    return (
        <div style={{padding: 40}}>
            <input
            value = {job} onChange = {e => setjob(e.target.value)}/>
            <button onClick = {hamdlesbumit} style={{width: 50, height: 10}}>Add</button>
            <ul> {jobs.map((job, index) =>(
                <h2 key={index}>{job}</h2>
                ))}
            </ul>
       
        </div>
    )
   
}


export default Todoapplocal