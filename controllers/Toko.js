import Toko from "../models/TokoModel.js";

export const GetAllToko = async(req, res) =>{
    try{
        const dataToko =  await Toko.findAll();
        res.json(dataToko);
    }catch(e){
        console.log(e)
    }
}

export const GetTokoByUserId = async(req,res) =>{
    try{
        const toko =  await Toko.findOne({
            where:{
                user_id: req.params.user_id
            }
        });
        res.json(toko);
    }catch(e){
        console.log(e)
    }
}


export const CreateToko = async(req,res) =>{
    try{
        await Toko.create({
            province_id :req.body.province_id,
            kota_id :req.body.kota_id,
            user_id :req.body.user_id,
            alamat : req.body.alamat,
            kode_pos :req.body.kode_pos,
            nama_toko : req.body.nama_toko,
            no_hp :req.body.no_hp
        })
        res.json("success");
    }catch(e){
        res.json(e);
    }
}

export const UpdateToko = async(req,res) =>{
    try{
        await Toko.update({
            province_id :req.body.province_id,
            kota_id :req.body.kota_id,
            user_id :req.body.user_id,
            alamat : req.body.alamat,
            kode_pos :req.body.kode_pos,
            nama_toko : req.body.nama_toko,
            no_hp :req.body.no_hp
        },
        { where: { id: req.body.id } })
        res.json("success");
    }catch(e){
        res.json(e);
    }
}

