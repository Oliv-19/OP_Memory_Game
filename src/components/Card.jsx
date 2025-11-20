export default function Card({data}){
    return (
        <div>
            <img src={data.src.small} alt={data.alt}/>
            <p>{data.photographer}</p>
        </div>
    )
}