import { useEffect, useState, useRef} from "react"
import Card from "./Card"
// import data from "./data";
import Dialog from "./Dialog";
async function getApi(cardsAmount){
        const apiKey = 'Xj0403G2dn9CFvk7n0Ddz9AUGqfixqxUI89bUrk6Q39kIsJSVFmV0PHU'
        const response = await fetch(`https://api.pexels.com/v1/search?query=a flower in the nature&per_page=${cardsAmount}&orientation=square`, {
            headers: {
                Authorization: apiKey   
            }
        })
        const data = await response.json()
    return data.photos

}
export default function Content({cardsAmount,score, setScore, setBestScore}){
    const [isLoading, setIsLoading] = useState(true)
    const [apiData, setApiData] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState({isOpen:false, message: 'Game Over'})
    // const [message, setMessage] = useState('Game Over')
    const [clickedID, setClickedId] = useState(new Set)
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const data = await getApi(cardsAmount)
                setApiData(data)
                setIsLoading(false)
                
            }catch(error){
                console.error("Error fetching data:", error)
            }

        }
        fetchData()
    },[cardsAmount])
    if(isLoading){
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }
    const checkWin= ()=>{
        if(score+1 == cardsAmount){
            console.log('win')
            setIsDialogOpen({isOpen:true, message: 'You Win'})
            setBestScore(prevData=> score > prevData ? score+1 : prevData)
        }

    }
    const gameOver = ()=>{
        console.log('gameOver')
        
        setIsDialogOpen({isOpen:true, message:'Game Over'})
        setBestScore(prevData=> score > prevData ? score : prevData)
    }

    const changeOrder = ()=>{
        const newOrderedData = [...apiData]
        newOrderedData.sort((a,b)=> {
            return Math.random() -0.5
        })
        setApiData(newOrderedData)
    }
    const playAgain= ()=>{
        setIsDialogOpen({isOpen:false, message: ''})
        setScore(0)
        changeOrder()
        setClickedId(new Set)
    }

    return (
        <main >
            <Dialog isOpen={isDialogOpen.isOpen} onClose={()=>setIsDialogOpen({isOpen:false, message:''})} id='playAgain'>
                <h1>{isDialogOpen.message}</h1>
                <button onClick={playAgain}>Play Again</button>
            </Dialog>
            {apiData.map((card)=> 
                <Card key={card.id} data={card} setScore={setScore} checkWin={checkWin} amount={cardsAmount} gameOver={gameOver} changeOrder={changeOrder} clicked={clickedID.has(card.id)} setClicked={setClickedId}/>)
            }
            
        </main>
    )
    
}