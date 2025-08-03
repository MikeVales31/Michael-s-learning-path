import { useState } from 'react'
import './App.css'

function App() {
  const [addPerson, setAddPerson] = useState(0)

  return (
    <>
      <header>
        <h1>People List</h1>
      </header>
      <body>
        <div className="Name">
          <h2>Count: {addPerson}</h2>
          <button onClick={() => setAddPerson(addPerson + 1)}>Increment</button>
        </div>
        
      </body>
    </>
  )
}

export default App
