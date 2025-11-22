import { useEffect, useState, useRef} from "react"
import Card from "./Card"
import data from "./data";
import Dialog from "./Dialog";
async function getApi(cardsAmount){
        const apiKey = 'Xj0403G2dn9CFvk7n0Ddz9AUGqfixqxUI89bUrk6Q39kIsJSVFmV0PHU'
        const response = await fetch(`https://api.pexels.com/v1/search?query=flowers&per_page=${cardsAmount}&orientation=square`, {
            headers: {
                Authorization: apiKey   
            }
        })
        const data = await response.json()
    return data.photos

}
export default function Content({cardsAmount,score, setScore, setBestScore}){
    const [apiData, setApiData] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)
    useEffect(() => {
        if(apiData == null){
            const fetchData = async ()=>{
            try{
                //const data = await getApi(cardsAmount)
                console.log(data)
                setApiData(data)
                
            }catch(error){
                console.error("Error fetching data:", error)
            }

            }
            fetchData()
        }
       
    },[cardsAmount])

    const gameOver = ()=>{
        console.log('gameOver')
        openDialog()
        setBestScore(prevData=> score > prevData ?? score)
        setScore(0)

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
        setApiData(prevData=> prevData)
    }
    return (
        <main >
            {apiData?(
                <>
                    <Dialog isOpen={isDialogOpen} onClose={closeDialog} >
                        <button onClick={playAgain}>Play Again</button>
                    </Dialog>
                    {apiData.map((data)=> 
                        <Card data={data} key={data.id} gameOver={gameOver} changeOrder={changeOrder}/>)
                    }
                </>
            ):(
                console.error('Error')
            )
            }
        </main>
    )

}