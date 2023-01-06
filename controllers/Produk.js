import Kota from "../models/KotaModel.js";
import Produk from "../models/ProdukModel.js";
import Provinces from "../models/ProvincesModel.js";
import Toko from "../models/TokoModel.js";
import Users from "../models/UserModel.js";

export const GetAllProduk = async(req, res) =>{
    try{
        const dataProduk =  await Produk.findAll({include: [
            {
              model: Toko,
              as: "toko",
              include: [{
                model: Provinces,
              },{
                model: Kota
              },{
                model: Users
              }]
            }]});
        res.json(dataProduk);
    }catch(e){
        console.log(e)
    }
}

export const GetAllProdukByTokoId = async(req, res) =>{
  try{
      const dataProduk =  await Produk.findAll({
        where:{
          toko_id: req.params.toko_id
        },
        include: [
          {
            model: Toko,
            as: "toko",
            include: [{
              model: Provinces,
            },{
              model: Kota
            },{
              model: Users
            }]
          }]});
      res.json(dataProduk);
  }catch(e){
      console.log(e)
  }
}

