const {Router} = require('express');
const  {getFilmHandler,getIdHandler, 
        getNameHandler, postDogHandler
       } = require('../handlers/filmGetHandler');
//const { filmApi } = require('../controllers/getController');

const filmRouter = Router();


filmRouter.get("/", getFilmHandler);

filmRouter.get("/name", getNameHandler);

filmRouter.get("/:idRaza", getIdHandler);

filmRouter.post("/", postDogHandler);




module.exports = filmRouter;