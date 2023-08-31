const { DataTypes, Sequelize } = require ("sequelize");

module.exports = (sequelize)=> {sequelize.define("Films",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false,
        //defaultValue:DataTypes.UUIDV4 para que asigne aleatoramente 
    },
   title:{
        type:DataTypes.STRING,
        allowNull:false,
   },
   year:{
       type: DataTypes.DATEONLY,
   },
   language:{
        type:DataTypes.STRING,
        
   },
   overview:{
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

