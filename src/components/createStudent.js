import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    rollNo: "",
  });

  const getState = (childData) => {
    setStudentData(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("https://crud-backend-kbv9.onrender.com/studentRoute/create-student", studentData)
      .then((res) => {
        if (res.status === 200) {
          alert("Record Added successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
      event.target.reset();
  };

  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
      <StudentForm getState={getState}
                   nameValue=""
                   emailValue=""
                   rollNoValue=""                   >
        Create Student
      </StudentForm>
    </form>
  );
}

export default CreateStudent;