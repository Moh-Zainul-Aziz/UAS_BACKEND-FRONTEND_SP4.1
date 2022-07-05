import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateVaksin =() =>{
    const [_nim, setNim] = useState('');
    const [_nama, setNama] = useState('');
    const [_tglvaksin, setTglvaksin] = useState('');
    const [_tmptvaksin, setTmptvaksin] = useState('');
    const router = useRouter();
    const {nim, nama, tglvaksin, tmptvaksin} = router.query;

    useEffect(() =>{
        if (typeof nim =='string') {
            setNim(nim);
        }
        if (typeof nama =='string') {
            setNama(nama);
        }
        if (typeof tglvaksin =='string') {
            setTglvaksin(tglvaksin);
        }
        if (typeof tmptvaksin =='string') {
            setTmptvaksin(tmptvaksin);
        }
    },[nim,nama,tglvaksin,tmptvaksin])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios
                .put(`http://localhost:5000/vaksin/${_nim}`, {
                    nim : _nim,
                    nama : _nama,
                    tglvaksin :_tglvaksin,
                    tmptvaksin :_tmptvaksin,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Update Data Sukses")
            Router.push('/admin/datavaksin')
        } catch (e) {
            console.log({ message : e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input data vaksinasi Mahasiswa</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input className="form-control mb-2"
                                id="nim"
                                placeholder="NIM"
                                type="text"
                                value={_nim}
                                onChange={(e) => setNim(e.target.value)}
                            />
                            <label htmlFor="nim">NIM</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control mb-2"
                                id="nama"
                                placeholder="Nama"
                                type="text"
                                value={_nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <label htmlFor="nama">Nama</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control mb-2"
                                id="tglvaksin"
                                placeholder="Tanggal vaksin"
                                type="text"
                                value={_tglvaksin}
                                onChange={(e) => setTglvaksin(e.target.value)}
                            />
                            <label htmlFor="tglvaksin">Tanggal Vaksin</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control mb-2"
                                id="tmptvaksin"
                                placeholder="Tempat Vaksin"
                                type="text"
                                value={_tmptvaksin}
                                onChange={(e) => setTmptvaksin(e.target.value)}
                            />
                            <label htmlFor="tmptvaksin">Tempat Vaksin</label>
                        </div>
                    </div>
                    <div className=" w-75 d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateVaksin;