const { Router } = require('express');
const filmRouter = require('./filmRouter');
const userRouter = require('./userRoute');
const jwt = require('jsonwebtoken')


const mainRouter = Router();

mainRouter.use("/", (req, res, next) => {
  const key = req.app.get('key'); // Accede a la clave desde la instancia de Express
  // Puedes utilizar 'key' como sea necesario en tus rutas

  let token = req.headers['x-access-token'] || req.headers['authorization'];
 // console.log(token);

  if(!token) {
    res.status(400).json({error: "debe ingresar un token"})
  return}
  if(token.startsWith('Bearer ')){
    token = token.slice(7, token.length);
    //console.log(token);
  }
  if(token){
    jwt.verify(token, req.app.get('key'), (error, decoded)=>{
        if(error){
            return res.json({message: "El token no es valido"})
        }
    }) 
    next();
  }
});

mainRouter.use("/film", filmRouter);
mainRouter.use("/", userRouter);

module.exports = mainRouter;

