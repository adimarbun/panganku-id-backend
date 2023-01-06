import {Sequelize} from "sequelize";

const db = new Sequelize('pangankuid_db','root','P@ssw0rd',{
    host: "localhost",
    dialect: "mysql"
});

export default db;