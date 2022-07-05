const res = require('express/lib/response')
const koleksi = require('../models/koleksi')

module.exports = {
    getKoleksi: (req, res) => {
        koleksi.getKoleksi((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },
    getKoleksiByNim : (req,res)=>{
        koleksi.getKoleksiByNim(req.params.nim,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Koleksi dengan Nim ${req.params.nim} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        nilai : []
                    });
                }
               }
               else{
                   res.send(data);
               }            
        });
    }
}