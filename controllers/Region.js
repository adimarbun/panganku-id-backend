import Kota from "../models/KotaModel.js";
import KotaReplika from "../models/KotaReplikaModel.js";
import Provinces from "../models/ProvincesModel.js"
import ProvincesReplika from "../models/ProvincesReplikaModel.js";

export const GetProvincy = async(req, res) =>{
    try{
        const dataProv =  await ProvincesReplika.findAll();
        res.json(dataProv);
    }catch(e){
        console.log(e)
    }
}

export const GetAllKota = async(req, res) =>{
    try{
        const dataKota =  await KotaReplika.findAll();
        res.json(dataKota);
    }catch(e){
        console.log(e)
    }
}

export const GetKotaByProvId = async(req, res) =>{
    try{
        const dataKota =  await KotaReplika.findAll({ where: { province_id: req.params.prov_id }});
        res.json(dataKota);
    }catch(e){
        console.log(e)
    }
}