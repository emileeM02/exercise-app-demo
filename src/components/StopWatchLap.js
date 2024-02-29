//Emilee Morris lab 5 stopwatch

/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useCallback } from 'react';
let currentTimer = 0

export default function StopWatchLap() {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let [lapTimes, setLapTimes] = useState([]);

    let updateTimer = useCallback(() => {
        if(running) {
            setTimer((timer) => timer+10)
        }
    }, [running])

    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    }, [running])
    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    let lap = useCallback(() => {
        setLapTimes((lapTimes) => [...lapTimes, timer]);
    }, [timer]);
    let reset = useCallback(() => {
        setTimer(0);
        setLapTimes([]);
    })

    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0")
    return <div style={{width:"100vw", textAlign:"center"}}>
    <p style = {{fontSize:"2em", margin:"auto"}}>{mins}:{secs}.{mills}</p>
    <button onClick = {startStop}>
        {running ? "Pause" : "Start"}
    </button>
    <button onClick={() => {
        setTimer(0)
    }}>Reset</button>
    <button onClick={lap}>Lap</button>
    {lapTimes.length > 0 && (
                <div>
                    <h3>Lap Times:</h3>
                    <ul>
                        {lapTimes.map((lapTime, index) => (
                            <li key={index}>
                                {Math.floor((lapTime / (1000 * 60)) % 60)
                                    .toString()
                                    .padStart(2, "0")}:
                                {Math.floor((lapTime / 1000) % 60)
                                    .toString()
                                    .padStart(2, "0")}:
                                {(lapTime % 1000).toString().padStart(3, "0")}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
    </div>
}