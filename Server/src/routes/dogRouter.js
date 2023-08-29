const {Router} = require('express');
const  {getDogRaceHandler,getIdHandler, 
        getNameHandler, postDogHandler
       } = require('../handlers/dogGetHandler');
const { getAllDogs } = require('../controllers/getController');

const dogRouter = Router();


dogRouter.get("/", getDogRaceHandler);

dogRouter.get("/name", getNameHandler);

dogRouter.get("/:idRaza", getIdHandler);

dogRouter.post("/", postDogHandler);




module.exports = dogRouter;