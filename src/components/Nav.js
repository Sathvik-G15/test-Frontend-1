import {Link} from "react-router-dom"

function Nav(){
    return (
        <div class="container">
            <div class="navbar">
            <Link to="/" class="navbar-brand" style={{fontFamily:"Nosifer"}}>CRUD Operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link">Create Student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>
            </div>
        </div>
        </div>
        
        
    )
}

export default Nav;