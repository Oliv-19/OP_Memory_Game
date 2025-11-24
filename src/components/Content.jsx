import { useEffect, useState, useRef} from "react"
import Card from "./Card"
// import data from "./data";
import Dialog from "./Dialog";
async function getApi(){
        const apiKey = 'Xj0403G2dn9CFvk7n0Ddz9AUGqfixqxUI89bUrk6Q39kIsJSVFmV0PHU'
        const response = await fetch(`https://api.pexels.com/v1/search?query=a flower in the nature&per_page=20&orientation=square`, {
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
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [clickedID, setClickedId] = useState(new Set)
    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const data = await getApi()
                setApiData(data)
                
            }catch(error){
                console.error("Error fetching data:", error)
            }finally {
                setIsLoading(false)
            }

        }
        fetchData()
    },[])
    if(!isLoading){
        const gameOver = ()=>{
            console.log('gameOver')
            openDialog()
            setBestScore(prevData=> score > prevData ? score : prevData)
            setScore(0)
            setClickedId(new Set)
        }

        const changeOrder = ()=>{
            const newOrderedData = [...apiData]
            newOrderedData.sort((a,b)=> {
                return Math.random() -0.5
            })
            setApiData(newOrderedData)
            setScore(prevData=> prevData+1)
        }
        const playAgain= ()=>{
            closeDialog()
            setScore(0)
            changeOrder()
        }

        const slicedData = apiData?.slice(0,cardsAmount)
        return (
            <main >
                <Dialog isOpen={isDialogOpen} onClose={closeDialog} id='playAgain'>
                    <h1>Game Lost!</h1>
                    <button onClick={playAgain}>Play Again</button>
                </Dialog>
                {slicedData.map((data)=> 
                    <Card key={data.id} data={data} amount={cardsAmount} gameOver={gameOver} changeOrder={changeOrder} clicked={clickedID.has(data.id)} setClicked={setClickedId}/>)
                }
                
            </main>
        )
    }
}