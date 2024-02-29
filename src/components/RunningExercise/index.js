//Emilee Morris running exercise

import StopWatchLap from "../StopWatchLap"

export default function RunningExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatchLap/>
      <button onClick = {setMenuScreen}>Return</button>
    </div>
}