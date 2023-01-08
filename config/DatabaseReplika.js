import {Sequelize} from "sequelize";

const dbReplika = new Sequelize('pangankuid_db','root','P@ssw0rd',{
    host: "localhost",
    dialect: "mysql"
});

export default dbReplika;