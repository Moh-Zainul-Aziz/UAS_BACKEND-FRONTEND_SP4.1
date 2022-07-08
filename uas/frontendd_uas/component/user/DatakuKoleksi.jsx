import KoleksikuByNim from "./KoleksikuByNim";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
const DatakuKoleksi = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    console.log(data)
    return (
        <>
            <div className="container mt-3">
                <h2>Data Koleksi Vaksinasi Mahasiswa</h2>
                <KoleksikuByNim/>
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>nim</th>
                            <th>kdVk</th>
                            <th>Dokter</th>
                            <th>Dosis</th>
                            <th>Kondisi</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((Kls,idx)=>(
                                <tr key ={idx}>
                                    <td>{Kls.nim}</td>
                                    <td>{Kls.kdVk}</td>
                                    <td>{Kls.dokter}</td>
                                    <td>{Kls.dosis}</td>
                                    <td>{Kls.kondisi}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DatakuKoleksi;