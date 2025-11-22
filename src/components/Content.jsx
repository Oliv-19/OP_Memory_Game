import { useEffect, useState} from "react"
import Card from "./Card"
import data from "./data";
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
export default function Content({cardsAmount}){
    const [apiData, setApiData] = useState(null)
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
    }

    const changeOrder = ()=>{
        const newOrderedData = [...apiData]
        newOrderedData.sort((a,b)=> {
            return Math.random() -0.5
        })
        setApiData(newOrderedData)
    }
    return (
        <main >
            {apiData?(
                apiData.map((data)=> <Card data={data} key={data.id} gameOver={gameOver} changeOrder={changeOrder}/>)
            ):(
                console.error('Error')
            )
            }
        </main>
    )

}