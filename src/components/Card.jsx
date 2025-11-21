import {useState} from "react"

export default function Card({data, gameOver, changeOrder}){
    const [click, setClicked] = useState(null)
    const handleClick = ()=>{
        if(click == null){
            changeOrder()
            setClicked(true)
        }else{
            gameOver()
        }
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={data.src.small} alt={data.alt}/>
            <p>{data.photographer}</p>
        </div>
    )
}