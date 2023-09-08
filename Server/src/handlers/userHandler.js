const {createNewUser} = require('../controllers/userController')
const {loginApi} = require('../controllers/userController')
const bcrypt = require('bcryptjs');


const postUserHandler = async (req, res) => {
    try {
      const { user, password } = req.body;
      const newUser = await createNewUser(user, password);
      res.status(201).json(newUser); // Enviar el usuario recién creado en la respuesta
    } catch (error) {

      res.status(400).json({ error: error.message });
    }
  };
  
  const getUserHandler = async (req, res) => {
    try {
      const { user } = req.query;
      console.log("handl",user );
      const response = await loginApi(user); // Pasar el nombre como argumento
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  const postLogHandler = async (req, res) => {
    try {
      const { user, password } = req.body;
      console.log("llego a back", user);
      const response = await loginApi(user); // Pasar el nombre como argumento
      console.log("pass de afuera", password);
      console.log("el pass hash es", response.password);
      const match = await bcrypt.compare(password, response.password);
  
      console.log("match es:", match);
  
      if (match) {
        // Autenticación exitosa
        res.json({ success: true, message: 'Autenticación exitosa' });
      } else {
        // Autenticación fallida
        res.json({ success: false, message: 'Autenticación fallida' });
      }
    } catch (error) {
      console.log("por aqui no es");
      console.error("Error en la comparación de contraseñas:", error); // Agrega esta línea para mostrar el mensaje de error
      res.status(400).json({ error: error.message });
    }
  };
  
  

module.exports = {postUserHandler, getUserHandler, postLogHandler}