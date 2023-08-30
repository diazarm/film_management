const { Router } = require('express');
const filmRouter = require ('./filmRouter');
const tempRouter = require ('./tempRouter.js');

const mainRouter = Router();

mainRouter.use("/film", filmRouter);

mainRouter.use("/user", tempRouter);


module.exports = mainRouter;
