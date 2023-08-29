const { DataTypes, Sequelize } = require ("sequelize");

module.exports = (sequelize)=> {sequelize.define("Dogs",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false,
        //defaultValue:DataTypes.UUIDV4 para que asigne aleatoramente 
    },
   name:{
        type:DataTypes.STRING,
        allowNull:false,
   },
   height:{
        type:DataTypes.ARRAY(DataTypes.STRING),  //cuando envio los datos por medio del body se hace con un array
   },
   weight:{
        type:DataTypes.ARRAY(DataTypes.STRING),
   },
   life_span:{
        type:DataTypes.STRING,
        allowNull:false,
   },
   image:{
     type:DataTypes.STRING,
   },
   created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,   
   },
}, {timestamps: false});

};

