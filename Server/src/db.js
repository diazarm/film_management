require('dotenv').config();
const {Sequelize} = require ("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME} = process.env;
const DogsModels = require('./models/DogsModels')
const TemperamentsModels = require('./models/TemperamentsModels')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});


DogsModels(sequelize);
TemperamentsModels(sequelize);


const {Dogs, Temperaments} = sequelize.models; 

Dogs.belongsToMany(Temperaments,{through: "temperament_Dogs"});
Temperaments.belongsToMany(Dogs,{through: "temperament_Dogs"});


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};

