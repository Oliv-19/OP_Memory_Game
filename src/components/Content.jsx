import { useEffect, useState} from "react"

async function getApi(){
    const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=flowers')
    const data= await response.json()
    return {
        title: data.data[0].title,
        img:data.data[0].thumbnail.lqip
    }

}
export default function Content(){
    const [apiData, setApiData] = useState(null)
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const data = await getApi()
                setApiData(data)
                
            }catch(error){
                console.error("Error fetching data:", error)
            }

        }
        fetchData()
    },[])

    return (
        <>
        </>
    )

}