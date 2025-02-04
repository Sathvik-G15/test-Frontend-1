import Axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props){
    const {_id,name,email,rollNo} = props.obj;   //object desturction

    const handleClick = ()=>{
        Axios.delete("https://crud-backend-kbv9.onrender.com/studentRoute/delete-student/"+_id)
        .then((res)=>{
            if(res.status===200){
                alert("Student deleted");
                window.location.reload();    //to refresh the webpage
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)})
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td class="d-flex justify-content-center">
            <Link class="text-decoration-none text-light me-4" to={"/update-student/"+_id}>
                <button class="btn btn-success">
                    Edit
                    </button>
                    </Link>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default StudentListRow;