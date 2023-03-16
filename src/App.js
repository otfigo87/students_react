import { useState } from 'react';
import { data } from './data';
import Student from './components/Student';
import './App.css';

function App() {

  const [studentsData, setStudentsData] = useState(data);

  return (
    <div className="App">
      <h1>REACT STUDENTS</h1>
      {
        studentsData.map(student => <Student key={student.name} name={student.name} bio={student.bio} scores={student.scores} />)
      }
    </div>
  );
}

export default App;
