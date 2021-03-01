
import React, {useState} from 'react';
import ErrorBoundaries from './ErrorBoundaries'

const Bomb = () => {
  
  throw new Error('💥 CABOOM 💥')
}

const App = (props) => {

  const [explode, setExplode] = useState(false);

  return (
    <>
      <h1>Home Page</h1>

      <button onClick={()=> setExplode(true)}>💣</button>

      <div>
        {explode 
        ?
        <ErrorBoundaries>
          <Bomb /> 
        </ErrorBoundaries>
        : 
        'Push the bomb'}

      </div>
    </>
  )
}

export default App
