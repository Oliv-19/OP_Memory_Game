import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Dialog from './components/Dialog'
import storage from "./components/Storage";

export default function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [cardsAmount, setCardsAmount] = useState(10)
  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)
  const changeDifficulty= (number)=> {
    setCardsAmount(number)
    closeDialog()
  }
  return (
    <>
      <nav>
        <h1>Memory Game</h1>
        <h3>Score: {score} </h3>
        <h3>Best score: {storage.getBestScore()?? bestScore} </h3>
        <button type='button' onClick={openDialog}> Difficulty</button>
      </nav>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} id='difficulty'>
        <div className={`difficulty_card ${cardsAmount === 10 && "selected"}`} type='button' onClick={()=> changeDifficulty(10)}>Easy <br></br> 10</div>
        <div className={`difficulty_card ${cardsAmount === 15 && "selected"}`} type='button' onClick={()=> changeDifficulty(15)}>Medium <br></br> 15</div>
        <div className={`difficulty_card ${cardsAmount === 20 && "selected"}`} type='button' onClick={()=> changeDifficulty(20)}>Hard <br></br> 20</div>
      </Dialog>
      <Content cardsAmount={cardsAmount} score={score} setScore={setScore}  setBestScore={setBestScore} />
    </>
  )
}

