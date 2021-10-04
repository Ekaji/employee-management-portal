import {useState, useEffect} from 'react'
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
        </div>
    );
}

export default App;
