const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> {sequelize.define("Temperaments",{
    // id:{
    //     type:DataTypes.UUID,
    //     primaryKey: true,
    //     defaultValue:DataTypes.UUIDV4,
    //    },
   name:{
        type:DataTypes.STRING,
        allowNull:false,
        },
   created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,   
        },
    },{timestamps:false});
};