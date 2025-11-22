import { useState } from 'react'
import './App.css'
import Content from './components/Content'

export default function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
      <nav>
        <h1>Memory Game</h1>
        <h3>Score: {score} </h3>
        <h3>Best score: {bestScore} </h3>
        <button type='button'> Difficulty</button>
      </nav>
      <Content cardsAmount={10} score={score} setScore={setScore}  setBestScore={setBestScore} />
    </>
  )
}

