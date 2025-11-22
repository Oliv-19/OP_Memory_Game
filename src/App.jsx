import { useState } from 'react'
import './App.css'
import Content from './components/Content'

export default function App() {
  return (
    <>
      <nav>
        <h1>Memory Game</h1>
        <h3>Score: {} </h3>
        <h4>Best score: {} </h4>
        <button type='button'> Difficulty</button>
      </nav>
      <Content cardsAmount={10}/>
    </>
  )
}

