import { useState,useEffect } from "react";
function StudentForm(props){

    const [name,setName]=useState(props.nameValue)
    const [email,setEmail]=useState(props.emailValue)
    const [rollNo,setrollNo]=useState(props.rollNoValue)
    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setrollNo(props.rollNoValue);
    }, [props]);
        const handleClick = ()=>{
        const newData = {name,email,rollNo};
        props.getState(newData);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
             <input value={name} onChange={(event)=>setName(event.target.value)}class="form-control my-3" placeholder="Enter your name"/>
             <input value={email} onChange={(event)=>setEmail(event.target.value)}class="form-control my-3" placeholder="Enter your email"/>
             <input value={rollNo} onChange={(event)=>setrollNo(event.target.value)}class="form-control my-3" placeholder="Enter your roll number"/>
             <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;