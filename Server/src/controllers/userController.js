const {Users} = require('../db');

const createNewUser = async (user, password) => {
    try {
      const newUser = await Users.create({ user, password });
      return newUser;
    } catch (error) {
      throw new Error('No se pudo crear el usuario: ' + error.message);
    }
  };
  
   
  const loginApi = async (user) => {
    try {
        console.log("el usu a buscar es", user);
      const dbUser = await Users.findByPk(user);
      if (dbUser) {
        return dbUser; // Retorna el usuario encontrado
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al buscar el usuario:', error.message);
      throw error; // Re-lanza el error para que pueda ser manejado en el controlador superior
    }
  };
  
module.exports = {loginApi, createNewUser};