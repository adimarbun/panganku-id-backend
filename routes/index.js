import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { GetAllKota, GetKotaByProvId, GetProvincy } from "../controllers/Region.js";
import {CreateToko, GetAllToko, GetTokoByUserId, UpdateToko} from "../controllers/Toko.js";
import { AddProduct, GetAllProduk, GetAllProdukByTokoId, GetProdukSearch, UploadImg } from "../controllers/Produk.js";


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
router.post('/toko',CreateToko)
router.put('/toko',UpdateToko)

//Produk
router.get('/all-produk',GetAllProduk);
router.get('/produk/by-toko/:toko_id',GetAllProdukByTokoId)
router.get('/produk/:prov_id/:kota_id',GetProdukSearch)
router.post('/produk',AddProduct)


router.post('/upload',UploadImg);



export default router;