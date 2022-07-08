import LayoutAdmin from "./LayoutAdmin";
import KoleksiByNim from "./KoleksiByNim";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
const DataKoleksi = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    console.log(data)
    return (
        <>
        <LayoutAdmin>
            <div className="container mt-3">
                <h2>Data Koleksi Vaksinasi Mahasiswa</h2>
                <KoleksiByNim/>
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>kdVk</th>
                            <th>Dokter</th>
                            <th>Dosis</th>
                            <th>Kondisi</th>
                            <th>tipe</th>
                            <th>tanggal vaksin</th>
                            <th>tempat vaksin</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((Kls,idx)=>(
                                <tr key ={idx}>
                                    <td>{Kls.kdVk}</td>
                                    <td>{Kls.dokter}</td>
                                    <td>{Kls.dosis}</td>
                                    <td>{Kls.kondisi}</td>
                                    <td>{Kls.tipe}</td>
                                    <td>{Kls.tglvaksin}</td>
                                    <td>{Kls.tmptvaksin}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </LayoutAdmin>
        </>
    )
}
export default DataKoleksi;