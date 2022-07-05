const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const vaksin = require("../controllers/vaksin");
const sql = require("./db")


module.exports = {
     insert : (vaksinBaru,result) => {
       sql.query("insert into vaksin SET ?",vaksinBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...vaksinBaru});
       })
    },

    getVaksin : (result) =>{
        let query = "Select * From vaksin";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getVaksinByNim : (nim, result) =>{
        let query = `Select * From vaksin Where nim =${nim}`;
        console.log(nim)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    update:(nim,vaksin,result)=>{
        sql.query(
            "UPDATE vaksin SET nama = ?, tglvaksin = ?, tmptvaksin = ? WHERE nim = ?",
            [vaksin.nama, vaksin.tglvaksin, vaksin.tmptvaksin, nim],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated vaksin : ",{nim: nim, ...vaksin});
                result(null,{nim: nim, ...vaksin});   
            }
        )
    },
    delete: (nim, result) =>{
        sql.query("DELETE FROM vaksin WHERE nim = ?", nim,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted vaksin with NIM : ",nim);
            result(null,res);
        });
    }
}