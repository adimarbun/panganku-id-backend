import { Sequelize } from "sequelize";
import dbReplika from "../config/DatabaseReplika.js";
import Toko from "./TokoModel.js";

const { DataTypes } = Sequelize;

const ProdukReplika = dbReplika.define('produk',{
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
    },
    stok:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName:true,
    timestamps: false
});

ProdukReplika.belongsTo(Toko,{ foreignKey: 'toko_id' })
export default ProdukReplika;