import React, { useEffect, useState } from "react";
   


//1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component thêm element vào Dom
//2. useEffect(callback, [])
// - chỉ gọi call backsau 1 lần sau khi component mouned
//3. useEffect(callback, [deps])

const tabs = ['port','commnet','album']

function Useeffect(){
    const [title, settitle] = useState('')
    const [port, setport] = useState([])
    const [type,settype] = useState('port')
console.log(type);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res =>res.json())
       .then(port => {
        setport(port);
       })
    },[type])

    return (
        <div>
            {
                tabs.map(tab =>(
                    <button key={tab} onClick = {() => settype(tab)}>
                        {tab}
                    </button>
                ))
            }
            <h1>learn reactjs useeffect</h1>
            <input value={title} 
            onChange = {e => settitle(e.target.value)}/>
            <ul>
                {port.map(port =>(
                    <li key={port.id}>{port.title} </li>
                ))}
            </ul>
        </div>
    )
}
export default Useeffect  