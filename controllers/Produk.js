import Kota from "../models/KotaModel.js";
import Produk from "../models/ProdukModel.js";
import Provinces from "../models/ProvincesModel.js";
import Toko from "../models/TokoModel.js";
import Users from "../models/UserModel.js";

import Sequelize from "sequelize";
const Op = Sequelize.Op;


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

export const GetProdukById= async(req, res) =>{
  try{
    const dataProduk =  await Produk.findOne(
      {
        where:{
          id: req.params.id,
        }
        });
    res.json(dataProduk);
  }catch(e){
      console.log(e)
  }
}

export const GetProdukSearch = async(req, res) =>{
  const provId=req.params.prov_id;
  const kotaId = req.params.kota_id;
  const nameProduk = req.query.produk;
  console.log("kota",kotaId);
  try{
    if(nameProduk){
      const dataProduk =  await Produk.findAll(
        {
          where:{
            nama_produk: { [Op.like]: `%${nameProduk}%` },
          },
          include: [
          {
            model: Toko,
            as: "toko",
            where :{
              kota_id : kotaId
            },
            include: [{
              model: Provinces,
            },{
              model: Kota
            },{
              model: Users
            }]
          }]});
      res.json(dataProduk);
    }else{
      const dataProduk =  await Produk.findAll(
        {
          include: [
          {
            model: Toko,
            as: "toko",
            where :{
              kota_id : kotaId
            },
            include: [{
              model: Provinces,
            },{
              model: Kota
            },{
              model: Users
            }]
          }]});
      res.json(dataProduk);
    }
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

export const UploadImg = async(req,res) =>{
  try{
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;

    // Use the mv() method to place the file somewhere on your server
    myFile.mv(`upload/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: " eroor" });
        }
        return res.send({ file: myFile.name, path: `/${myFile.name}`, ty: myFile.type });
    });
  }catch(e){
    console.log("err",e);
  }
}

//add produk
export const AddProduct = async(req,res) =>{
  try{
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;

    const fileName = `toko-${req.body.toko_id}-${req.body.nama_produk}.jpg`;
    // Use the mv() method to place the file somewhere on your server
    myFile.mv(`upload/${fileName}`, async function(err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: " eroor" });
        }
    });

    //add to db
    await Produk.create({
        toko_id : req.body.toko_id,
        nama_produk : req.body.nama_produk,
        deskripsi_produk : req.body.deskripsi_produk,
        harga_produk : req.body.harga_produk,
        img_produk :`http://localhost:5000/uploads/${fileName}`,
        stok : req.body.stok
    })
    res.send("success add produk"); 
  }catch(e){
    console.log("err");
    res.send("error",e);
  }
}

export const UpdateProduk = async(req,res) =>{
  try{
      await Produk.update({
        toko_id : req.body.toko_id,
        nama_produk : req.body.nama_produk,
        deskripsi_produk : req.body.deskripsi_produk,
        harga_produk : req.body.harga_produk,
        stok : req.body.stok
      },
      { where: { id: req.body.id } })
      res.json("success");
  }catch(e){
      res.json(e);
  }
}

export const DeleteProduk = async(req,res) =>{
  try{
    await Produk.destroy({
      where:{
        id:req.params.id
      }
    })
    res.json("success");
  }catch(e){
    res.json("err:",e)
  }
}

