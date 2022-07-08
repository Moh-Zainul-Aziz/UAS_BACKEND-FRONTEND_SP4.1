import VaksinkuByNim from "./VaksinkuByNim";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
const DatakuVaksin = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    return (
        <>
            <div className="container mt-3">
                <h2>Data Vaksinasi Mahasiswa</h2>
                <VaksinkuByNim/>
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
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DatakuVaksin;