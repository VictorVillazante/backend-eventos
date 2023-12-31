const { DataTypes, where, sequelize } = require("../settings/sequilize-config");
const Espacios=sequelize.define(
    "espacios",
    {
        id_espacio:{
            primaryKey:true,
            allowNull:false,
            type:DataTypes.STRING
        },
        nombre:{
            allowNull:false,
            type:DataTypes.STRING
        },
        id_ciudad:{
            allowNull:false,
            type:DataTypes.STRING
        },
        latitud:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        longitud:{
            allowNull:false,
            type:DataTypes.NUMBER
        }
    },
    {
        timestamp:false
    }
)
module.exports=Espacios;