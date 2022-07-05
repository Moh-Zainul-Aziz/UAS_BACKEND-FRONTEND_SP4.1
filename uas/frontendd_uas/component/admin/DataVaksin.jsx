import LayoutAdmin from "./LayoutAdmin";
import VaksinByNim from "./VaksinByNim";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
const DataVaksin = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusVaksin(nim) {
        try {
            const response = await axios.delete(
                `http://localhost:5000/vaksin/${nim}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`Mahasiswa vaksinasi dengan NIM ${nim} telah di hapus`)
        } catch (error) {
            console.log({message : error.message});
        }
        router.push('/admin/datavaksin')
    }
    return (
        <>
        <LayoutAdmin>
            <div className="container mt-3">
                <h2>Data Vaksinasi Mahasiswa</h2>
                <VaksinByNim/>
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Nim</th>
                            <th>Nama</th>
                            <th>tanggal Vaksin</th>
                            <th>Tempat Vaksin</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((Vks,idx)=>(
                                <tr key ={idx}>
                                    <td>{Vks.nim}</td>
                                    <td>{Vks.nama}</td>
                                    <td>{Vks.tglvaksin}</td>
                                    <td>{Vks.tmptvaksin}</td>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <Link href={`/admin/updatevaksin?nim=${Vks.nim}
                                            &nama${Vks.nama}&tglvaksin=${Vks.tglvaksin}&tmptvaksin=${Vks.tmptvaksin}`}>
                                                <a class="btn btn-outline-success"  role="button">Edit</a>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                    <button type="button" value={Vks.nim} 
                                    onClick = {(e) => hapusVaksin(e.target.value)}
                                    class="btn btn-danger btn-sm">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </LayoutAdmin>
        </>
    )
}
export default DataVaksin;