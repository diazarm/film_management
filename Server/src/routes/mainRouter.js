const { Router } = require('express');
const filmRouter = require('./filmRouter');
const userRouter = require('./userRoute');

const mainRouter = Router();

mainRouter.use("/", (req, res, next) => {
  const key = req.app.get('key'); // Accede a la clave desde la instancia de Express
  // Puedes utilizar 'key' como sea necesario en tus rutas
  next();
});

mainRouter.use("/film", filmRouter);
mainRouter.use("/", userRouter);

module.exports = mainRouter;
