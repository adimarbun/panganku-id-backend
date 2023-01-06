import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Provinces = db.define('provinces',{
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


export default Provinces;