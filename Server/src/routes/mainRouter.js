const { Router } = require('express');
const filmRouter = require ('./filmRouter');
const userRouter = require('./userRoute');

const mainRouter = Router();

mainRouter.use("/film", filmRouter);

mainRouter.use("/", userRouter);



module.exports = mainRouter;
