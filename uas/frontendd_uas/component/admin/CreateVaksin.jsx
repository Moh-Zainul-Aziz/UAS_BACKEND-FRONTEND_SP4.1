import { useState } from "react";
import axios from "axios";

const CreateVaksin = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [tglvaksin, setTglvaksin] = useState('');
    const [tmptvaksin, setTmptvaksin] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/vaksin/", {
                    nim,
                    nama,
                    tglvaksin,
                    tmptvaksin,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setNim('')
        setNama('')
        setTglvaksin('')
        setTmptvaksin('')
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
                                    value={nim}
                                    onChange={(e) => setNim(e.target.value)}
                                />
                                <label htmlFor="nim">NIM</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="nama"
                                    placeholder="Nama"
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <label htmlFor="nama">Nama</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="tglvaksin"
                                    placeholder="Tanggal vaksin"
                                    type="text"
                                    value={tglvaksin}
                                    onChange={(e) => setTglvaksin(e.target.value)}
                                />
                                <label htmlFor="tglvaksin">Tanggal Vaksin</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="tmptvaksin"
                                    placeholder="Tempat Vaksin"
                                    type="text"
                                    value={tmptvaksin}
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
        )
    }
    export default CreateVaksin;