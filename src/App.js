//Emilee Morris Lab 5 Exercise App

import './App.css';
import {useCallback, useState} from 'react'
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"

let exerciseList = [
  {type: REPETITION_EXERCISE, name: "Push Ups"},
  {type: DURATION_EXERCISE, name: "Bicycling"},
  {type: REPETITION_EXERCISE, name: "Jumping Jacks"},
  {type: DURATION_EXERCISE, name: "Running"},
  {type: REPETITION_EXERCISE, name: "Sit Ups"},
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  let buttonClick  = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })

  if (currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <h2>Let's get started!</h2>
      <p>Choose an exercise:</p>
      <ul>
        {exerciseList.map((exercise) => {
        return <li key = {exercise.name}>
          <button onClick = {() => buttonClick(exercise)}>{exercise.name}</button>
        </li>
        })}
      </ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = <DurationExercise 
          setMenuScreen = {()=> setCurrentScreen(MENU_SCREEN)} 
          exercise = {currentExercise}/>
      break;
      case REPETITION_EXERCISE: 
        screenComponent = <RepetitionExercise 
          setMenuScreen = {()=> setCurrentScreen(MENU_SCREEN)} 
          exercise = {currentExercise}/>
      break;
      default:
        screenComponent = undefined
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;
