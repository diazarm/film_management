const { Router } = require('express');
const mainRouter = require("./mainRouter");
const getTemperamentsHandler = require("../handlers/getTemperamentsHandler")


const tempRouter = Router();
//tempRouter.get("/temperaments", getTemperamentsHandler);
tempRouter.get("/", (req, res)=>{
     res.send ("ruta del temperamento");
});


module.exports = tempRouter;