import Link from "next/link";
const Nav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:"white"}}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link active"aria-current="page" href="#" style={{color:"white"}}>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/eventstate"><a className="nav-link" style={{color:"white"}}>Formulir</a></Link> 
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                        Vaksinasi Mahasiswa
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href={{
                            pathname: "/user/datakuvaksin",
                            query: 
                            {id : '12345' ,
                             nama: 'zainul'}
                            }}>
                        <li><a className="dropdown-item" href="#">Data Vaksinasi</a></li>
                        </Link>
                        <Link href="/user/datakukoleksi">
                        <li><a className="dropdown-item" href="#">Data Koleksi</a></li>
                        </Link>
                        <li><a className="dropdown-item" href="#">Data Jenis</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" style={{color:"white"}}>Search</button>
                </form>
                </div>
            </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
export default Nav;