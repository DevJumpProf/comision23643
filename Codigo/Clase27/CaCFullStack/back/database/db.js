import {Sequelize} from "sequelize"

/* nombre de la db , user, contraseña,{donde esta alojada?,lenguaje db,puerto} */

const db = new Sequelize ("post23643","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db