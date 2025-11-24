import { useRef, useState } from 'react'
import './App.css'
import Content from './components/Content'
import Dialog from './components/Dialog'

export default function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [cardsAmount, setCardsAmount] = useState(10)
  let diffRef= useRef(null)

    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)
    const changeDifficulty= (number, e)=> {
      
      diffRef.current.classList.remove('selected')
      setCardsAmount(number)
      closeDialog()
      diffRef.current = e.target
      diffRef.current.classList.add('selected')
    }

  return (
    <>
      <nav>
        <h1>Memory Game</h1>
        <h3>Score: {score} </h3>
        <h3>Best score: {bestScore} </h3>
        <button type='button' onClick={openDialog}> Difficulty</button>
      </nav>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} id='difficulty'>
        <div ref={diffRef} className='difficulty_card selected' type='button' onClick={(e)=> changeDifficulty(10, e)}>Easy <br></br> 10</div>
        <div className='difficulty_card' type='button' onClick={(e)=> changeDifficulty(15, e)}>Medium <br></br> 15</div>
        <div className='difficulty_card' type='button' onClick={(e)=> changeDifficulty(20, e)}>Hard <br></br> 20</div>
      </Dialog>
      <Content cardsAmount={cardsAmount} score={score} setScore={setScore}  setBestScore={setBestScore} />
    </>
  )
}

