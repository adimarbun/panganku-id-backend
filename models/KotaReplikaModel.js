import { Sequelize } from "sequelize";

import dbReplika from "../config/DatabaseReplika.js";

const { DataTypes } = Sequelize;

const KotaReplika = dbReplika.define('kota',{
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

export default KotaReplika;