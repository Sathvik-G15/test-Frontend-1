import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Axios from "axios";

function EditStudent(){
    const {id} = useParams();
    const [student, setStudent] = useState({name:"",email:"",rollNo:""});
    const [newData, setNewData] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-backend-kbv9.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200){
                console.log(res);
                const {name,email,rollNo} = res.data;
                setStudent({name,email,rollNo});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])
    const getState=(childData)=>{
        setNewData(childData);
        setStudent(childData);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        Axios.put("https://crud-backend-kbv9.onrender.com/studentRoute/update-student/"+id, newData)
        .then((res)=>{
            if(res.status===200){
                console.log(res);
                alert("updated Successfully");
                setStudent(newData);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                        nameValue={student.name}
                        emailValue={student.email}
                        rollNoValue={student.rollNo}>
                Update Student        
            </StudentForm>
        </form>
    )
}
export default EditStudent;