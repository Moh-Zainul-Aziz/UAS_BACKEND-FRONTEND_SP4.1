import { useRouter } from "next/router"
const nim = () =>{
    const data_keterangan =[ 
        {nim : '11103201', keterangan : 'Sudah Vaksin'},
        {nim : '11103202', keterangan : 'Belum Vaksin'},
        {nim : '11103203', keterangan : 'Sudah Vaksin Dosis 1 & 2'}
      ];
    const router = useRouter();
    const {nim} = router.query;
    const data = data_keterangan.find(m => m.nim == nim)
    return(
        <>
        <p>nim : {nim}</p>
        <p>Keterangan : {data.keterangan}</p>
        </>
    )
}

export default nim;