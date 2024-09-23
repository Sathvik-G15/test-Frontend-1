import Axios from "axios";
import { useEffect,useState} from "react";
import StudentListRow from "./StudentListRow";
function StudentList(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-backend-kbv9.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    },[])
    const Items = ()=>{
        return arr.map((val,ind)=>{
            return <StudentListRow obj={val}/>
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-stripped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Actions</th>

                </tr>
            </thead>
            <tbody>
                {Items()}
            </tbody>
        </table>
    )
}

export default StudentList;