const express = require("express");
const routerVaksin = express.Router()
const controllerVaksin = require('../controllers/vaksin')
const controllerKoleksi = require('../controllers/koleksi')


routerVaksin.route('/vaksin')
    .get(controllerVaksin.getVaksin)
    .post(controllerVaksin.insert)

routerVaksin.route('/vaksin/:nim')
    .put(controllerVaksin.update)
    .delete(controllerVaksin.delete)
    .get(controllerVaksin.getVaksinByNim)

routerVaksin.route('/koleksi')
    .get(controllerKoleksi.getKoleksi)
    
routerVaksin.route('/koleksi/:nim')
    .get(controllerKoleksi.getKoleksiByNim)
    
module.exports = routerVaksin