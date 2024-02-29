//Emilee Morris repetition exercise

import { useState } from 'react';

export default function RepetitionExercise({exercise, setMenuScreen}) {
    let [count, setCount] = useState(0)
    return <div>
      <p>{exercise.name}</p>
      <p style = {{fontSize: "2em"}}>{count}</p>
      <button onClick={() => setCount(count => count+1)}>Complete Rep</button>
      <button onClick={() => setCount(0)}>Reset</button><br/>
      <button onClick = {setMenuScreen}>Return</button>
      </div>
  }