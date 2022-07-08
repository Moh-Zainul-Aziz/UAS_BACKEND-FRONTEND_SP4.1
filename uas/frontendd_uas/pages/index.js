import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/dist/client/link";
import Nav from "../component/user/Nav" 
import { useRouter } from "next/router";
import UserLayout from "../component/user/UserLayout";
export default function Home() {
  const data_vaksin =[ 
    {nim : '11103201', nama : 'Mohammad'},
    {nim : '11103202', nama : 'Zainul'},
    {nim : '11103203', nama : 'Aziz'}
  ];
  const router = useRouter()
  const sendParamRouter = (nim) =>{
    router.push(`/user/${nim}`)    
  }
  return (
    <div>
      <UserLayout>
      <main>
        <h3>Daftar Vaksinasi Mahasiswa</h3>
        <ul>
          {data_vaksin.map((Vks,idx)=>(
            <>
            <li key={idx}>
              <Link href={`/user/${Vks.nim}`}>
              {Vks.nim}
              </Link>
              <p>{Vks.nama}</p>
              <button className="btn- btn-danger" onClick={(e) =>sendParamRouter(Vks.nim)}>Cek Data</button>
            </li>
            </>
          ))}
        </ul>
      </main>
      </UserLayout>
    </div>
    
  )
}
