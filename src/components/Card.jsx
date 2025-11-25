
export default function Card({data, gameOver,setScore, changeOrder, setClicked, clicked, amount, checkWin}){
    const handleClick = ()=>{
        if( !clicked){
            changeOrder()
            setClicked(prevData=> prevData.add(data.id))
            setScore(prevData=> prevData+1)  
            checkWin()
        }else{
            gameOver()
        }
    }
    let className= 'card'+amount
    return (
        <div className={`card ${className}`} onClick={handleClick} onKeyUp={(e)=>{if(e.key=='Enter') handleClick()}} title={`Photo by: ${data.photographer}`} tabIndex='0'>
            <div className="imgWrapper">
                <img src={data.src.medium} alt={data.alt}/>
            </div>
            <div className="textWrapper" >
                <p>{data.photographer}</p>

            </div>
        </div>
    )
}