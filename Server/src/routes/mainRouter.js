const { Router } = require('express');
const dogRouter = require ('./dogRouter');
const tempRouter = require ('./tempRouter.js');

const mainRouter = Router();

mainRouter.use("/dogs", dogRouter);

mainRouter.use("/temperaments", tempRouter);


module.exports = mainRouter;
