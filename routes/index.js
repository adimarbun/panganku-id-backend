import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { GetAllKota, GetKotaByProvId, GetProvincy } from "../controllers/Region.js";
import {CreateToko, GetAllToko, GetTokoById, GetTokoByUserId, UpdateToko} from "../controllers/Toko.js";
import { AddProduct, DeleteProduk, GetAllProduk, GetAllProdukByTokoId, GetProdukById, GetProdukSearch, UpdateProduk, UploadImg } from "../controllers/Produk.js";


const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

//Region
router.get('/provinces',GetProvincy)
router.get('/all-kota',GetAllKota)
router.get('/kota/:prov_id',GetKotaByProvId)

//Toko
router.get('/all-toko',GetAllToko)
router.get('/toko/:user_id',GetTokoByUserId)
router.get('/toko-by-id/:id',GetTokoById)
router.post('/toko',CreateToko)
router.put('/toko',UpdateToko)

//Produk
router.get('/all-produk',GetAllProduk);
router.get('/produk/by-toko/:toko_id',GetAllProdukByTokoId)
router.get('/produk/:prov_id/:kota_id',GetProdukSearch)
router.get('/produk/:id',GetProdukById);
router.post('/produk',AddProduct);
router.put('/produk',UpdateProduk);
router.delete("/produk/:id",DeleteProduk);

router.post('/upload',UploadImg);

export default router;