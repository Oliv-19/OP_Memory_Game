
export default function Card({data, gameOver, changeOrder, setClicked, clicked, amount}){
    const handleClick = ()=>{
        if( !clicked ){
            changeOrder()
            setClicked(prevData=> prevData.add(data.id))
        }else{
            gameOver()
        }
    }
    let className= 'card'+amount
    return (
        <div className={`card ${className}`} onClick={handleClick}>
            <div className="imgWrapper">
                <img src={data.src.small} alt={data.alt}/>
            </div>
            <div className="textWrapper">
                <p>{data.photographer}</p>

            </div>
        </div>
    )
}