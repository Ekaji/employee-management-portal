import {useState, useEffect} from 'react'
import EmployeForm from './components/EmployeForm';
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setData(data.message))
  },[])

    return (
        <div className="App">
            <h1>{!data ? 'loading...' : data}</h1>
            <EmployeForm />
        </div>
    );
}

export default App;
