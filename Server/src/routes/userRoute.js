const {Router} = require('express');
const  {postUserHandler, getUserHandler, postLogHandler} = require('../handlers/userHandler');
const mainRouter = require('./mainRouter');

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

userRouter.get("/info", (req, res) => {
        res.json("Aquí la información importante");
    });
      

module.exports = userRouter;