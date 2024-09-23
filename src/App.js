import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateStudent from "./components/createStudent";
import StudentList from "./components/studentList";
import EditStudent from './components/EditStudent';
function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={< CreateStudent/>} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/update-student/:id" element={<EditStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
