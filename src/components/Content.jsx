import { useEffect, useState} from "react"
import Card from "./Card"
import { createClient } from 'pexels';
import data from "./data";
async function getApi(cardsAmount){
        const apiKey = 'Xj0403G2dn9CFvk7n0Ddz9AUGqfixqxUI89bUrk6Q39kIsJSVFmV0PHU'
        const client = createClient(apiKey);
        const query = 'flowers';

        const photos = await client.photos.search({ query, per_page: cardsAmount, orientation: 'square'})
    return photos.photos

}
export default function Content({cardsAmount}){
    const [apiData, setApiData] = useState(null)
    useEffect(() => {
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
    },[cardsAmount])

    const gameOver = ()=>{
        console.log('gameOver')
    }

    return (
        <main >
            {apiData?(
                apiData.map((data)=> <Card data={data} key={data.id} gameOver={gameOver}/>)
            ):(
                console.error('Error')
            )
            }
        </main>
    )

}