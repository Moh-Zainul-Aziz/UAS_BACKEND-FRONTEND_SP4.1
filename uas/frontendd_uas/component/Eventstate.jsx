import { useState } from 'react'

const Evenstate = () => {
    
    const [nim, setNim] = useState('')
    const [nama, setNama] = useState('')
    const [tgl, setTgl] = useState('')
    const [alamat, setAlamat] = useState('')
    const [gender, setGender] = useState('')
    return (
        <div className="container m-4">
            <div className="row">
                <div className="col-5">
                    <h3>Form Pendaftaran Vaksinasi</h3> <hr />
                    <div className="md-2">
                        <label htmlFor="nama">Nim :</label>
                        <input className="form-control" type="text" name="nama" id="nim" value={nim} onChange = {(e)=>setNim(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="nama">Nama :</label>
                        <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange = {(e)=>setNama(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="nama">Alamat : </label>
                        <input className="form-control" type="text" name=" alamat" id="alamat" value={alamat} onChange = {(e)=>setAlamat(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="nama">Tempat Tanggal Lahir</label>
                        <input className="form-control" type="date" name="nama" id="nama" value={tgl} onChange={(e) => setTgl(e.target.value)} />
                    </div>
                    <br />
                    <div className="md-3">
                        <label htmlFor="nama" className='fs-5'>Gender : </label>
                        <br /> 
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderPria" checked={()=>setGender('pria')} value="Pria" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Pria</label>
                        </div>
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderWanita" checked={()=>setGender('wanita')} value="Wanita" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Wanita</label>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <h3>Resume</h3> <hr />
                    <div className="md-2">
                        <h5 className="mb-2">Nim : {nim}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Nama : {nama}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Tempat Tanggal Lahir : {tgl}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Alamat : {alamat}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Gender : {gender}</h5>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Evenstate;