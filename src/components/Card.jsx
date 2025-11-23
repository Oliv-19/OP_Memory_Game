import {useState} from "react"

export default function Card({data, gameOver, changeOrder, setClicked, clicked}){
    const handleClick = ()=>{
        if( !clicked ){
            changeOrder()
            setClicked(prevData=> prevData.add(data.id))
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