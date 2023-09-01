const { Router } = require('express');
const filmRouter = require ('./filmRouter');


const mainRouter = Router();

mainRouter.use("/film", filmRouter);




module.exports = mainRouter;
