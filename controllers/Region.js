import Kota from "../models/KotaModel.js";
import Provinces from "../models/ProvincesModel.js"

export const GetProvincy = async(req, res) =>{
    try{
        const dataProv =  await Provinces.findAll();
        res.json(dataProv);
    }catch(e){
        console.log(e)
    }
}

export const GetAllKota = async(req, res) =>{
    try{
        const dataKota =  await Kota.findAll();
        res.json(dataKota);
    }catch(e){
        console.log(e)
    }
}

export const GetKotaByProvId = async(req, res) =>{
    try{
        const dataKota =  await Kota.findAll({ where: { province_id: req.params.prov_id }});
        res.json(dataKota);
    }catch(e){
        console.log(e)
    }
}