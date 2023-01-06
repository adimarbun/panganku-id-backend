import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kota = db.define('kota',{
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true,
    timestamps: false
});

export default Kota;