import "bootstrap/dist/css/bootstrap.min.css"
import DataVaksin from "../../component/admin/DataVaksin"
const datavaksin =({data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <DataVaksin data ={data}/>
        </div>
        </>
    )
}


export async function getServerSideProps({query}) {
    const nim = query.nim;
    
    let url = 'http://localhost:5000/vaksin'
    if (typeof nim === 'string') {
        url = `http://localhost:5000/vaksin/${nim}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datavaksin;