import { Sequelize } from "sequelize";
import dbReplika from "../config/DatabaseReplika.js";
import Kota from "./KotaModel.js";
import Provinces from "./ProvincesModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const TokoReplika = dbReplika.define('toko',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    province_id:{
        type: DataTypes.STRING,
        references: {
            model: Provinces, 
            key: 'id'
        }
    },
    kota_id:{
        type: DataTypes.STRING,
        references: {
            model: Kota, 
            key: 'id'
        }
    },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Users, 
            key: 'id'
        }
    },
    nama_toko:{
        type: DataTypes.STRING
    },
    alamat:{
        type: DataTypes.STRING
    },
    kode_pos:{
        type: DataTypes.STRING
    },
    no_hp:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true,
    timestamps: false
});

TokoReplika.belongsTo(Provinces,{foreignKey: 'province_id'});
TokoReplika.belongsTo(Kota,{foreignKey: 'kota_id'})
TokoReplika.belongsTo(Users,{ foreignKey: 'user_id' })

export default TokoReplika;