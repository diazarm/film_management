const {Router} = require('express');
const  {postUserHandler, getUserHandler, postLogHandler} = require('../handlers/userHandler')

const userRouter = Router();


userRouter.use("/login", (req, res, next) => {
    const key = req.app.get('key'); // Accede a la clave desde la instancia de Express
    // Puedes utilizar 'key' como sea necesario en tus rutas
    next();
  });

  
userRouter.post("/", postUserHandler)

userRouter.get("/", getUserHandler)

userRouter.post("/login", (req, res) => {
    const key = req.app.get('key'); 
    postLogHandler(req, res, key)})

module.exports = userRouter;