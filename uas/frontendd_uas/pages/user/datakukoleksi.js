import "bootstrap/dist/css/bootstrap.min.css"
import DatakuKoleksi from "../../component/user/DatakuKoleksi"
import UserLayout from "../../component/user/UserLayout"
const datakoleksi =({data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <UserLayout />
        <DatakuKoleksi data ={data}/>
        </div>
        </>
    )
}


export async function getServerSideProps({query}) {
    const nim = query.nim;
    
    let url = 'http://localhost:5000/koleksi'
    if (typeof nim === 'string') {
        url = `http://localhost:5000/koleksi/${nim}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datakoleksi;