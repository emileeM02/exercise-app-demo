//Emilee Morris duration exercise

import StopWatch from "../StopWatch"

export default function DurationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick = {setMenuScreen}>Return</button>
    </div>
  }
  