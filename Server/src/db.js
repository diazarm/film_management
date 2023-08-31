require('dotenv').config();
const {Sequelize} = require ("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME} = process.env;
const FilmsModels = require('./models/FilmsModels')
const UsersModels = require('./models/UsersModels')
//const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Mm48536804',
//   database: 'film'
// });

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});


FilmsModels(sequelize);
UsersModels(sequelize);


const {Films, Users} = sequelize.models; 

Films.belongsToMany(Users,{through: "user_films"});
Users.belongsToMany(Films,{through: "user_films"});


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};

