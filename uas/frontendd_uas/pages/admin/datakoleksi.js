import "bootstrap/dist/css/bootstrap.min.css"
import DataKoleksi from "../../component/admin/DataKoleksi"
const datakoleksi =({data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <DataKoleksi data ={data}/>
        </div>
        </>
    )
}


export async function getServerSideProps({query}) {
    try {
        let nim = query.nim;
    if (typeof nim == 'undefined') {
        nim = ''
    }
    let url = `http://localhost:5000/koleksi/${nim}`
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
    } catch (error) {
        const data = []
        return {props :{data}}
    }
    
}

export default datakoleksi;