const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const koleksi = require("../controllers/koleksi");
const sql = require("./db")


module.exports = {
    getKoleksi : (result) =>{
        let query = "Select * From koleksi";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },
    getKoleksiByNim:(nim,result) =>{
        try {
            sql.query(`SELECT jenis.kdVk, jenis.tipe, vaksin.tglvaksin, vaksin.tmptvaksin, koleksi.dokter,koleksi.dosis,koleksi.kondisi 
            FROM vaksin,jenis,koleksi
            WHERE vaksin.nim=${nim} and koleksi.nim=${nim} and koleksi.kdVk=jenis.kdVk`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}