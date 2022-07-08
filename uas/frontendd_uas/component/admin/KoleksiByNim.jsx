import { useState } from "react";
import {useRouter} from "next/router"

const KoleksiByNim = () =>{
    const [nim, setNim] = useState('')
    const router = useRouter()
    const getKlsByNim = (e) =>{
        e.preventDefault();
        console.log(nim)
        router.push({
            pathname : 'datakoleksi',
            query : {'nim': nim}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getKlsByNim}>
                <div className="row"> 
                <div className="col-8"> </div>
                <div className="col d-flex flex-reverse">
                        <input type='text' className="form-control" placeholder="Cari Mahasiswa yang sudah vaksin dengan nim" value={nim} onChange={(e)=>setNim(e.target.value)}/>
                        <input type="submit" value="Cari"  className="btn btn-dark ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default KoleksiByNim;
