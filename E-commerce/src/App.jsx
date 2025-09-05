import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState(""); // State to hold new student name
  const [rollNo, setRollNo] = useState(""); // State to hold new student roll number
  const [students, setStudents] = useState([]); // State to hold the list of students

  const handleAddStudent = () => {
    // Add the new student to the students array
    if (studentName.trim() && rollNo.trim()) {
      const newStudent = { Name: studentName, RollNo: rollNo }; // Create a student object
      setStudents([...students, newStudent]); // Add the new student to the array
      setStudentName(""); // Clear the name input field after adding
      setRollNo(""); // Clear the roll number input field after adding
    }
  };

  return (
    <>
      <input
        type="text"
        value={studentName} // Set input value to the studentName state
        onChange={(e) => setStudentName(e.target.value)} // Update studentName state
        placeholder="Name"
      />
      <input
        type="text"
        value={rollNo} // Set input value to the rollNo state
        onChange={(e) => setRollNo(e.target.value)} // Update rollNo state
        placeholder="Roll No."
      />
      <button onClick={handleAddStudent}>Add</button>

      {/* Display the list of students */}
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.Name} - Roll No: {student.RollNo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
