import { useRouter } from "next/router"
const nim = () =>{
    const data_vaksin =[ 
        {nim : '11103201', nilai : 'A'},
        {nim : '11103202', nilai : 'AB'},
        {nim : '11103203', nilai : 'B'}
      ];
    const router = useRouter();
    const {nim} = router.query;
    const data = data_vaksin.find(m => m.nim == nim)
    return(
        <>
        <p>nim : {nim}</p>
        <p>Nilai : {data.nilai}</p>
        </>
    )
}

export default nim;