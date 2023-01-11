import { Sequelize } from "sequelize";
import dbReplika from "../config/DatabaseReplika.js";

const { DataTypes } = Sequelize;

const UsersReplika = dbReplika.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default UsersReplika;