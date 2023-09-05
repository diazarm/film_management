const {createNewUser} = require('../controllers/userController')
const {loginApi} = require('../controllers/userController')

const postUserHandler = async (req, res) => {
    try {
      const { user, password } = req.body;
      console.log("te envio", user, password);
      const newUser = await createNewUser(user, password);
      res.status(201).json(newUser); // Enviar el usuario recién creado en la respuesta
    } catch (error) {
        console.log("paso por 400");
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
  


module.exports = {postUserHandler, getUserHandler}