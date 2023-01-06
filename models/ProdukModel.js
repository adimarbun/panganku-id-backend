import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Toko from "./TokoModel.js";

const { DataTypes } = Sequelize;

const Produk = db.define('produk',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    toko_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Toko, 
            key: 'id'
        }
    },
    nama_produk:{
        type: DataTypes.STRING
    },
    deskripsi_produk:{
        type: DataTypes.STRING
    },
    harga_produk:{
        type: DataTypes.DECIMAL
    },
    img_produk:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true,
    timestamps: false
});

Produk.belongsTo(Toko,{ foreignKey: 'toko_id' })
export default Produk;