export default function Card({data}){
    return (
        <div>
            <img src={data.img} alt={data.alt} />
            <p>{data.title}</p>
        </div>
    )
}