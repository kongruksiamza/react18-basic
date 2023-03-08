import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react";
import AddForm from "./components/AddForm";
import "./App.css";
function App() {
  //สร้าง state
  const [students, setStudent] = useState([]);
  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>
      </main>
    </div>
  );
}

export default App;
